import { Account } from '../components/Account'
import { Balance } from '../components/Balance'
import { BlockNumber } from '../components/BlockNumber'
import { ConnectButton } from '../components/ConnectButton'
import { Connected } from '../components/Connected'
import { MintTokens } from '../components/MintTokens'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { TokenContract } from '../components/ReadContract'
import { ReadContracts } from '../components/ReadContracts'
import { ReadContractsInfinite } from '../components/ReadContractsInfinite'
import { SendTransaction } from '../components/SendTransaction'
import { SendTransactionPrepared } from '../components/SendTransactionPrepared'
import { SignMessage } from '../components/SignMessage'
import { SignTypedData } from '../components/SignTypedData'
import { Token } from '../components/Token'
import { WatchContractEvents } from '../components/WatchContractEvents'
import { WatchPendingTransactions } from '../components/WatchPendingTransactions'
import { WriteContract } from '../components/WriteContract'
import { WriteContractPrepared } from '../components/WriteContractPrepared'

export function Page() {
  return (
    <>
      <h1>Encode Club Lesson 16</h1>

      <ConnectButton />

      <Connected>
        <h2>ETH Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Block Number</h2>
        <BlockNumber />
        <br />
        <hr />
        <h2>Token Contract</h2>
        <TokenContract />
        <br />
        <MintTokens />
        <hr />
        <h2>Voting Contract</h2>
        <ReadContracts />
        <br />
        <hr />
        <h2>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr />
      </Connected>
    </>
  )
}

export default Page
