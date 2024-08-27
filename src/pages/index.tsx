import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import { useWriteContract, type BaseError } from 'wagmi';
import styles from '../styles/Home.module.css';
import { abi } from '../../abi/RCCStake.json';
import { ethers } from 'ethers';

const Home: NextPage = () => {
  const { data: hash, isPending, writeContract, error } = useWriteContract()


  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const stakeAmount = formData.get('stakeAmount') as string
    // const decimals = 18; 
    // const convertedStakeAmount = ethers.parseUnits(stakeAmount, decimals); 
    const convertedStakeAmount = BigInt(stakeAmount);

    writeContract({
      address: '0x5d0cDfF9316ef38C22a2Fd25FC2CB0e1Ad54D455',
      abi,
      functionName: 'depositnativeCurrency',
      value: convertedStakeAmount
    })
  }


  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <ConnectButton />

        <form onSubmit={submit}>
          <input name="stakeAmount" placeholder="69420" required />
          <button type="submit"  disabled={isPending}>{isPending ? 'Confirming...' : 'Stake'}</button>
          {hash && <div>Transaction Hash: {hash}</div>}
          {error && (
            <div>Error: {(error as BaseError).shortMessage || error.message}</div>
          )}
        </form>
      </main>

    </div>
  );
};

export default Home;
