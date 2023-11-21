'use client'

import { useState } from 'react'
import { Address, BaseError } from 'viem'
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi'

import { tokenContractConfig } from './contracts'
import { stringify } from '../utils/stringify'

export function VoteProposal(address: string, proposalNumber: number) {
  const [tokenQty, setTokenQty] = useState<bigint>(BigInt(0))

  const { config } = usePrepareContractWrite({
    ...tokenContractConfig,
    functionName: 'mint',
    args: [address, BigInt(tokenQty)],
  })

  const { write, data, error, isLoading, isError } = useContractWrite(config)

  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash })

  return (
    <>
      <h3>Mint new tokens</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          write?.()
        }}
      >
        <input
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          placeholder="Token Amount"
          onChange={(e) => setTokenQty(BigInt(e.target.value))}
        />
        <button disabled={!write} type="submit">
          Mint
        </button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </>
  )
}
