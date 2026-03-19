import { useCallback, useEffect, useState } from 'react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export function WalletScreen() {
  const { connection } = useConnection()
  const { publicKey, signMessage, connected } = useWallet()
  const [lamports, setLamports] = useState<number | null>(null)
  const [loadingBal, setLoadingBal] = useState(false)
  const [sig, setSig] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const refreshBalance = useCallback(async () => {
    if (!publicKey) return
    setLoadingBal(true)
    setErr(null)
    try {
      const b = await connection.getBalance(publicKey)
      setLamports(b)
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Balance fetch failed')
    } finally {
      setLoadingBal(false)
    }
  }, [connection, publicKey])

  useEffect(() => {
    if (connected && publicKey) void refreshBalance()
  }, [connected, publicKey, refreshBalance])

  const copyAddress = async () => {
    if (!publicKey) return
    try {
      await navigator.clipboard.writeText(publicKey.toBase58())
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setErr('Could not copy to clipboard')
    }
  }

  const onSign = async () => {
    if (!signMessage || !publicKey) return
    setErr(null)
    setSig(null)
    try {
      const msg = new TextEncoder().encode(
        `Solana Mobile PWA demo - ${new Date().toISOString()}`
      )
      const out = await signMessage(msg)
      setSig(
        `${Array.from(out)
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('')
          .slice(0, 32)}…`
      )
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Sign failed')
    }
  }

  return (
    <div className="screen">
      <header className="screen__header">
        <p className="eyebrow">Wallet</p>
        <h1 className="screen__title">Account</h1>
        <p className="screen__lead">
          Query account balance and request an off-chain message signature on the configured cluster.
        </p>
      </header>

      <section className="card">
        <div className="wallet-row wallet-row--stretch">
          <WalletMultiButton />
        </div>
        {!connected && (
          <p className="muted">Connect a wallet to enable balance retrieval and signing.</p>
        )}
      </section>

      {connected && publicKey && (
        <>
          <section className="card card--list">
            <div className="list-row">
              <div className="list-row__main">
                <h2 className="list-row__label">Address</h2>
                <p className="mono-wrap list-row__value">{publicKey.toBase58()}</p>
              </div>
              <button type="button" className="btn btn--compact secondary" onClick={() => void copyAddress()}>
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </section>

          <section className="card card--balance">
            <h2 className="list-row__label">Balance</h2>
            <p className="balance">
              {loadingBal
                ? 'Loading…'
                : lamports === null
                  ? '-'
                  : `${(lamports / LAMPORTS_PER_SOL).toFixed(6)} SOL`}
            </p>
            <button type="button" className="btn secondary" onClick={() => void refreshBalance()}>
              Refresh balance
            </button>
          </section>

          <section className="card">
            <h2 className="card__title">Sign message</h2>
            <p className="card__text">
              Request a signature over an arbitrary payload without submitting an on-chain
              transaction.
            </p>
            <button type="button" className="btn primary btn--block" onClick={() => void onSign()}>
              Sign reference payload
            </button>
            {sig && (
              <p className="muted small mono-wrap">
                Signature (hex prefix): <code>{sig}</code>
              </p>
            )}
          </section>
        </>
      )}

      {err && <p className="error-banner">{err}</p>}
    </div>
  )
}
