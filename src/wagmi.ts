import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sepolia
} from 'wagmi/chains';
import { http } from '@wagmi/core';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: '5427b5823f2692348a3e07b961b08b61',
  chains: [sepolia],
  transports: {
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/In518Z9i2umy6Nqm0yTFE8d9p2b312Uh')
  },
  ssr: true,
});