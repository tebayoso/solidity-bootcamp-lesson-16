'use client'

import { useContractReads } from 'wagmi'

import { ballotContractConfig, wagmiContractConfig } from './contracts'
import { stringify } from '../utils/stringify'

export function ReadContracts() {
  const { data, isSuccess, isLoading } = useContractReads({
    contracts: [
      {
        ...ballotContractConfig,
        functionName: 'proposals',
        args: [BigInt(0)],
      },
      {
        ...ballotContractConfig,
        functionName: 'proposals',
        args: [BigInt(1)],
      },
      {
        ...ballotContractConfig,
        functionName: 'proposals',
        args: [BigInt(2)],
      }
    ],
  })

  const { data: tokenInfo, isSuccess: tokenLoaded, isLoading: tokenLoading } = useContractReads({
    contracts: [
      {
        ...ballotContractConfig,
        functionName: 'tokenContract',
      }
    ],
  })

  console.log(data)

  return (
    <div>
      <div>Token:</div>
      {tokenLoading && <div>loading...</div>}
      {tokenLoaded &&
        tokenInfo?.map((data) => <pre key={stringify(data)}>{stringify(data)}</pre>)}
      <div>Data:</div>
      {isLoading && <div>loading...</div>}
      {isSuccess &&
        data?.map((data) => <pre key={stringify(data)}>{stringify(data)}</pre>)}
    </div>
  )
}
