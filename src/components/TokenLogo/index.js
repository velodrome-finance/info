import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import EthereumLogo from '../../assets/eth.png'

const optimismTokenList = {
  "name": "Optimism",
  "logoURI": "https://ethereum-optimism.github.io/logos/optimism.svg",
  "keywords": [
    "scaling",
    "layer2",
    "infrastructure"
  ],
  "timestamp": "2021-03-22T10:01:21.042+00:00",
  "tokens": [
    {
      "chainId": 1,
      "address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
      "name": "Synthetix",
      "symbol": "SNX",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/SNX.svg",
      "extensions": {
        "optimismBridgeAddress": "0x39Ea01a0298C315d149a490E34B59Dbf2EC7e48F"
      }
    },
    {
      "chainId": 10,
      "address": "0x8700daec35af8ff88c16bdf0418774cb3d7599b4",
      "name": "Synthetix",
      "symbol": "SNX",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/SNX.svg",
      "extensions": {
        "optimismBridgeAddress": "0x136b1EC699c62b0606854056f02dC7Bb80482d63"
      }
    },
    {
      "chainId": 42,
      "address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
      "name": "Synthetix",
      "symbol": "SNX",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/SNX.svg",
      "extensions": {
        "optimismBridgeAddress": "0xc00E7C2Bd7B0Fb95DbBF10d2d336399A939099ee"
      }
    },
    {
      "chainId": 69,
      "address": "0x0064A673267696049938AA47595dD0B3C2e705A1",
      "name": "Synthetix",
      "symbol": "SNX",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/SNX.svg",
      "extensions": {
        "optimismBridgeAddress": "0x5b643DFC67f9701929A0b55f23e0Af61df50E75D"
      }
    },
    {
      "chainId": 1,
      "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      "name": "Dai stable coin",
      "symbol": "DAI",
      "decimals": 18,
      "logoURI": "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=010",
      "extensions": {
        "optimismBridgeAddress": "0x10E6593CDda8c58a1d0f14C5164B376352a55f2F"
      }
    },
    {
      "chainId": 10,
      "address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      "name": "Dai stable coin",
      "symbol": "DAI",
      "decimals": 18,
      "logoURI": "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=010",
      "extensions": {
        "optimismBridgeAddress": "0x467194771dAe2967Aef3ECbEDD3Bf9a310C76C65"
      }
    },
    {
      "chainId": 42,
      "address": "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa",
      "name": "Dai stable coin",
      "symbol": "DAI",
      "decimals": 18,
      "logoURI": "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=010",
      "extensions": {
        "optimismBridgeAddress": "0xb415e822C4983ecD6B1c1596e8a5f976cf6CD9e3"
      }
    },
    {
      "chainId": 69,
      "address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      "name": "Dai stable coin",
      "symbol": "DAI",
      "decimals": 18,
      "logoURI": "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=010",
      "extensions": {
        "optimismBridgeAddress": "0x467194771dAe2967Aef3ECbEDD3Bf9a310C76C65"
      }
    },
    {
      "chainId": 42,
      "address": "0xe0BB0D3DE8c10976511e5030cA403dBf4c25165B",
      "name": "Tether USD",
      "symbol": "USDT",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDT.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
      "name": "Tether USD",
      "symbol": "USDT",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDT.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "name": "Tether USD",
      "symbol": "USDT",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDT.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
      "name": "Tether USD",
      "symbol": "USDT",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDT.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
      "name": "Wrapped Bitcoin",
      "symbol": "WBTC",
      "decimals": 8,
      "logoURI": "https://ethereum-optimism.github.io/logos/WBTC.svg",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x2382a8f65b9120E554d1836a504808aC864E169d",
      "name": "Wrapped Bitcoin",
      "symbol": "WBTC",
      "decimals": 8,
      "logoURI": "https://ethereum-optimism.github.io/logos/WBTC.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "name": "Wrapped Bitcoin",
      "symbol": "WBTC",
      "decimals": 8,
      "logoURI": "https://ethereum-optimism.github.io/logos/WBTC.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
      "name": "Wrapped Bitcoin",
      "symbol": "WBTC",
      "decimals": 8,
      "logoURI": "https://ethereum-optimism.github.io/logos/WBTC.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x24a19ee5a5c8757acdebe542a9436d9c796d1c9e",
      "name": "0xBitcoin",
      "symbol": "0xBTC",
      "decimals": 8,
      "logoURI": "https://ethereum-optimism.github.io/logos/0xBTC.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x56B4F5f44d348EC3F07Bf1f31A3B566E5304BedE",
      "name": "0xBitcoin",
      "symbol": "0xBTC",
      "decimals": 8,
      "logoURI": "https://ethereum-optimism.github.io/logos/0xBTC.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
      "name": "0xBitcoin",
      "symbol": "0xBTC",
      "decimals": 8,
      "logoURI": "https://ethereum-optimism.github.io/logos/0xBTC.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xe0BB0D3DE8c10976511e5030cA403dBf4c25165B",
      "name": "0xBitcoin",
      "symbol": "0xBTC",
      "decimals": 8,
      "logoURI": "https://ethereum-optimism.github.io/logos/0xBTC.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "name": "Chainlink",
      "symbol": "LINK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LINK.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
      "name": "Chainlink",
      "symbol": "LINK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LINK.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0xa36085F69e2889c224210F603D836748e7dC0088",
      "name": "Chainlink",
      "symbol": "LINK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LINK.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x4911b761993b9c8c0d14Ba2d86902AF6B0074F5B",
      "name": "Chainlink",
      "symbol": "LINK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LINK.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 10,
      "address": "0x65559aA14915a70190438eF90104769e5E890A00",
      "name": "Ethereum Name Service",
      "symbol": "ENS",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/ENS.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72",
      "name": "Ethereum Name Service",
      "symbol": "ENS",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/ENS.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 42,
      "address": "0x50EB44e3a68f1963278b4c74c6c343508d31704C",
      "name": "Tether EUR",
      "symbol": "EURT",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDT.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x65e44970ebFe42f98F83c4B67062DE94B9f3Da7D",
      "name": "Tether EUR",
      "symbol": "EURT",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDT.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 69,
      "address": "0xaA5068dC2B3AADE533d3e52C6eeaadC6a8154c57",
      "name": "Synthetix USD",
      "symbol": "sUSD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/sUSD.svg"
    },
    {
      "chainId": 10,
      "address": "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
      "name": "Synthetix USD",
      "symbol": "sUSD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/sUSD.svg"
    },
    {
      "chainId": 42,
      "address": "0x50dC5200082d37d5dd34B4b0691f36e3632fE1A8",
      "name": "USD Coin",
      "symbol": "USDC",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDC.svg",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x4e62882864fB8CE54AFfcAf8D899A286762B011B",
      "name": "USD Coin",
      "symbol": "USDC",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDC.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "name": "USD Coin",
      "symbol": "USDC",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDC.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
      "name": "USD Coin",
      "symbol": "USDC",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDC.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 10,
      "address": "0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49",
      "name": "Synthetic Ether",
      "symbol": "sETH",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/sETH.svg"
    },
    {
      "chainId": 10,
      "address": "0x298B9B95708152ff6968aafd889c6586e9169f1D",
      "name": "Synthetic Bitcoin",
      "symbol": "sBTC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/sBTC.svg"
    },
    {
      "chainId": 10,
      "address": "0xc5Db22719A06418028A40A9B5E9A7c02959D0d08",
      "name": "Synthetic Chainlink",
      "symbol": "sLINK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/sLINK.svg"
    },
    {
      "chainId": 1,
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "name": "Uniswap",
      "symbol": "UNI",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/UNI.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x6fd9d7ad17242c41f7131d257212c54a0e816691",
      "name": "Uniswap",
      "symbol": "UNI",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/UNI.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
      "name": "LUSD Stablecoin",
      "symbol": "LUSD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LUSD.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xc40f949f8a4e094d1b49a23ea9241d289b7b2819",
      "name": "LUSD Stablecoin",
      "symbol": "LUSD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LUSD.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "name": "Uniswap",
      "symbol": "UNI",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/UNI.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x5e31B81eaFba4b9371e77F34d6f3DA8091C3F2a0",
      "name": "Uniswap",
      "symbol": "UNI",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/UNI.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xd291e7a03283640fdc51b121ac401383a46cc623",
      "name": "Rari Governance Token",
      "symbol": "RGT",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/RGT.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xb548f63d4405466b36c0c0ac3318a22fdcec711a",
      "name": "Rari Governance Token",
      "symbol": "RGT",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/RGT.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
      "name": "Rai Reflex Index",
      "symbol": "RAI",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/RAI.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x7FB688CCf682d58f86D7e38e03f9D22e7705448B",
      "name": "Rai Reflex Index",
      "symbol": "RAI",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/RAI.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x76b06a2f6dF6f0514e7BEC52a9AfB3f603b477CD",
      "name": "Rai Reflex Index",
      "symbol": "RAI",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/RAI.svg",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x743224e4822710a3e40d754244f3e0f1db2e5d8f",
      "name": "Rai Reflex Index",
      "symbol": "RAI",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/RAI.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xae78736cd615f374d3085123a210448e74fc6393",
      "name": "Rocket Pool ETH",
      "symbol": "rETH",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/rETH.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
      "name": "Rocket Pool ETH",
      "symbol": "rETH",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/rETH.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x7ae1d57b58fa6411f32948314badd83583ee0e8c",
      "name": "Paper",
      "symbol": "PAPER",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/PAPER.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x00F932F0FE257456b32dedA4758922E56A4F4b42",
      "name": "Paper",
      "symbol": "PAPER",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/PAPER.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x7697b462a7c4ff5f8b55bdbc2f4076c2af9cf51a",
      "name": "Sarcophagus",
      "symbol": "SARCO",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/sarcophagus.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x7c6b91d9be155a6db01f749217d76ff02a7227f2",
      "name": "Sarcophagus",
      "symbol": "SARCO",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/sarcophagus.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x15Ee120fD69BEc86C1d38502299af7366a41D1a6",
      "name": "BitANT",
      "symbol": "BitANT",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BitANT.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x5029C236320b8f15eF0a657054B84d90bfBEDED3",
      "name": "BitANT",
      "symbol": "BitANT",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BitANT.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x3Ef0aBa205134ba2f449Fa04A0A0673020c36270",
      "name": "BitANT",
      "symbol": "BitANT",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BitANT.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x1f748732AF4442Cf508DEf0882ad9fcB5E5205a2",
      "name": "BitANT",
      "symbol": "BitANT",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BitANT.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x3C513dB8Bdc3806e4489d62C3d549A5Aaf6A4e97",
      "name": "BitBTC",
      "symbol": "BitBTC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BitBTC.png",
      "extensions": {
        "optimismBridgeAddress": "0xaBA2c5F108F7E820C049D5Af70B16ac266c8f128"
      }
    },
    {
      "chainId": 10,
      "address": "0xc98B98d17435AA00830c87eA02474C5007E1f272",
      "name": "BitBTC",
      "symbol": "BitBTC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BitBTC.png",
      "extensions": {
        "optimismBridgeAddress": "0x158F513096923fF2d3aab2BcF4478536de6725e2"
      }
    },
    {
      "chainId": 42,
      "address": "0xF6DD2A9B840826D53c9842207628502B79E6B8c2",
      "name": "BitBTC",
      "symbol": "BitBTC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BitBTC.png",
      "extensions": {
        "optimismBridgeAddress": "0x0b651A42F32069d62d5ECf4f2a7e5Bd3E9438746"
      }
    },
    {
      "chainId": 69,
      "address": "0x83643C9eF0c5707A7815124754d0828c9A38be3a",
      "name": "BitBTC",
      "symbol": "BitBTC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BitBTC.png",
      "extensions": {
        "optimismBridgeAddress": "0x0CFb46528a7002a7D8877a5F7a69b9AaF1A9058e"
      }
    },
    {
      "chainId": 1,
      "address": "0x01ba67aac7f75f647d94220cc98fb30fcc5105bf",
      "name": "Lyra",
      "symbol": "LYRA",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LYRA.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
      "name": "Lyra",
      "symbol": "LYRA",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LYRA.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
      "name": "UMA Voting Token v1",
      "symbol": "UMA",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/UMA.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea",
      "name": "UMA Voting Token v1",
      "symbol": "UMA",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/UMA.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x002be8a5961e0f352092d6693133a6944b7846ba",
      "name": "Perpetual",
      "symbol": "PERP",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/PERP.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
      "name": "Perpetual",
      "symbol": "PERP",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/PERP.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
      "name": "Perpetual",
      "symbol": "PERP",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/PERP.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
      "name": "Perpetual",
      "symbol": "PERP",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/PERP.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x521EE0CeDbed2a5A130B9218551fe492C5c402e4",
      "name": "BarnBridge Governance Token",
      "symbol": "BOND",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BOND.svg",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3",
      "name": "BarnBridge Governance Token",
      "symbol": "BOND",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BOND.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
      "name": "dForce",
      "symbol": "DF",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DF.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3",
      "name": "dForce",
      "symbol": "DF",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DF.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x79E40d67DA6eAE5eB4A93Fc6a56A7961625E15F3",
      "name": "dForce",
      "symbol": "DF",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DF.svg",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x3e7eF8f50246f725885102E8238CBba33F276747",
      "name": "dForce",
      "symbol": "DF",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DF.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x0a5e677a6a24b2f1a2bf4f3bffc443231d2fdec8",
      "name": "dForce USD",
      "symbol": "USX",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/USX.svg",
      "extensions": {
        "optimismBridgeAddress": "0xC5b1EC605738eF73a4EFc562274c1c0b6609cF59"
      }
    },
    {
      "chainId": 10,
      "address": "0xbfD291DA8A403DAAF7e5E9DC1ec0aCEaCd4848B9",
      "name": "dForce USD",
      "symbol": "USX",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/USX.svg",
      "extensions": {
        "optimismBridgeAddress": "0xc76cbFbAfD41761279E3EDb23Fd831Ccb74D5D67"
      }
    },
    {
      "chainId": 42,
      "address": "0xf76ead4da04bbeb97d29f83e2ec3a621d0fb3c6e",
      "name": "dForce USD",
      "symbol": "USX",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/USX.svg",
      "extensions": {
        "optimismBridgeAddress": "0x40E862341b2416345F02c41Ac70df08525150dC7"
      }
    },
    {
      "chainId": 69,
      "address": "0xab7020476d814c52629ff2e4cebc7a8cdc04f18e",
      "name": "dForce USD",
      "symbol": "USX",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/USX.svg",
      "extensions": {
        "optimismBridgeAddress": "0xB4d37826b14Cd3CB7257A2A5094507d701fe715f"
      }
    },
    {
      "chainId": 1,
      "address": "0x0391D2021f89DC339F60Fff84546EA23E337750f",
      "name": "BarnBridge Governance Token",
      "symbol": "BOND",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BOND.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x3e7eF8f50246f725885102E8238CBba33F276747",
      "name": "BarnBridge Governance Token",
      "symbol": "BOND",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BOND.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 10,
      "address": "0x4200000000000000000000000000000000000006",
      "name": "Wrapped Ether",
      "symbol": "WETH",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/WETH.png"
    },
    {
      "chainId": 1,
      "address": "0x259ab9b9eab62b0fd98729b97be121073d5b3479",
      "name": "Erica Social Token",
      "symbol": "EST",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/EST.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x7b0bcC23851bBF7601efC9E9FE532Bf5284F65d3",
      "name": "Erica Social Token",
      "symbol": "EST",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/EST.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x001dedC8c67EF6D1f4BB66FB28581d466650Cd76",
      "name": "Dentacoin",
      "symbol": "DCN",
      "decimals": 0,
      "logoURI": "https://ethereum-optimism.github.io/logos/dcn.svg",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0xfd6ab60e0744e95c35fb17afda478eeae3835ddf",
      "name": "Dentacoin",
      "symbol": "DCN",
      "decimals": 0,
      "logoURI": "https://ethereum-optimism.github.io/logos/dcn.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
      "name": "Dentacoin",
      "symbol": "DCN",
      "decimals": 0,
      "logoURI": "https://ethereum-optimism.github.io/logos/dcn.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x1da650c3b2daa8aa9ff6f661d4156ce24d08a062",
      "name": "Dentacoin",
      "symbol": "DCN",
      "decimals": 0,
      "logoURI": "https://ethereum-optimism.github.io/logos/dcn.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789",
      "name": "Kromatika",
      "symbol": "KROM",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/KROM.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xf98dcd95217e15e05d8638da4c91125e59590b07",
      "name": "Kromatika",
      "symbol": "KROM",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/KROM.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x0436F489525c47C1A4877a06bE0BEaba2A2E2e2d",
      "name": "Kromatika",
      "symbol": "KROM",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/KROM.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
      "name": "Kromatika",
      "symbol": "KROM",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/KROM.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xca1207647Ff814039530D7d35df0e1Dd2e91Fa84",
      "name": "dHEDGE DAO Token",
      "symbol": "DHT",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DHT.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xAF9fE3B5cCDAe78188B1F8b9a49Da7ae9510F151",
      "name": "dHEDGE DAO Token",
      "symbol": "DHT",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DHT.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
      "name": "Maker",
      "symbol": "MKR",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/MKR.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xab7badef82e9fe11f6f33f87bc9bc2aa27f2fcb5",
      "name": "Maker",
      "symbol": "MKR",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/MKR.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x102e941b77bcaa7e35d368cafe51ef8f79c8d1ef",
      "name": "Theranos Coin",
      "symbol": "LIZ",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LIZ.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x3bB4445D30AC020a84c1b5A8A2C6248ebC9779D0",
      "name": "Theranos Coin",
      "symbol": "LIZ",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LIZ.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 10,
      "address": "0x61BAADcF22d2565B0F471b291C475db5555e0b76",
      "name": "Aelin Protocol",
      "symbol": "AELIN",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/AELIN.png"
    },
    {
      "chainId": 42,
      "address": "0x47Aa2a683b88E23c4d76f91Aa4181A59d0E4FBfb",
      "name": "Theranos Coin",
      "symbol": "LIZ",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LIZ.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x3bb4445d30ac020a84c1b5a8a2c6248ebc9779d0",
      "name": "Theranos Coin",
      "symbol": "LIZ",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LIZ.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
      "name": "Mask Network",
      "symbol": "MASK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/MASK.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x3390108E913824B8eaD638444cc52B9aBdF63798",
      "name": "Mask Network",
      "symbol": "MASK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/MASK.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xD533a949740bb3306d119CC777fa900bA034cd52",
      "name": "Curve DAO Token",
      "symbol": "CRV",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/CRV.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x0994206dfe8de6ec6920ff4d779b0d950605fb53",
      "name": "Curve DAO Token",
      "symbol": "CRV",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/CRV.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x42d6622dece394b54999fbd73d108123806f6a18",
      "name": "SPANK",
      "symbol": "SPANK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/spank.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9",
      "name": "SPANK",
      "symbol": "SPANK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/spank.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x2eA8f9B29AC1d70e01AE9D23d0451D2242e8d609",
      "name": "SPANK",
      "symbol": "SPANK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/spank.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0xcfD1D50ce23C46D3Cf6407487B2F8934e96DC8f9",
      "name": "SPANK",
      "symbol": "SPANK",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/spank.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
      "name": "LoopringCoin V2",
      "symbol": "LRC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LRC.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xFEaA9194F9F8c1B65429E31341a103071464907E",
      "name": "LoopringCoin V2",
      "symbol": "LRC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LRC.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x8947da500Eb47F82df21143D0C01A29862a8C3c5",
      "name": "Optimistic Thales Token",
      "symbol": "THALES",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/THALES.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x217D47011b23BB961eB6D93cA9945B7501a5BB11",
      "name": "Optimistic Thales Token",
      "symbol": "THALES",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/THALES.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xa693b19d2931d498c5b318df961919bb4aee87a5",
      "name": "UST (Wormhole)",
      "symbol": "UST",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/UST.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xBA28feb4b6A6b81e3F26F08b83a19E715C4294fd",
      "name": "UST (Wormhole)",
      "symbol": "UST",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/logos/UST.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xB4272071eCAdd69d933AdcD19cA99fe80664fc08",
      "name": "CryptoFranc",
      "symbol": "XCHF",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/XCHF.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xE4F27b04cC7729901876B44f4EAA5102EC150265",
      "name": "CryptoFranc",
      "symbol": "XCHF",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/XCHF.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      "name": "Aave Token",
      "symbol": "AAVE",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/AAVE.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x76FB31fb4af56892A25e32cFC43De717950c9278",
      "name": "Aave Token",
      "symbol": "AAVE",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/AAVE.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x9BE876c6DC42215B00d7efe892E2691C3bc35d10",
      "name": "Aave Token",
      "symbol": "AAVE",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/AAVE.svg",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x76FB31fb4af56892A25e32cFC43De717950c9278",
      "name": "Aave Token",
      "symbol": "AAVE",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/AAVE.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x1da87b114f35e1dc91f72bf57fc07a768ad40bb0",
      "name": "Equalizer",
      "symbol": "EQZ",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/EQZ.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x81ab7e0d570b01411fcc4afd3d50ec8c241cb74b",
      "name": "Equalizer",
      "symbol": "EQZ",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/EQZ.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0xea281a04cf517aa0d4645bdda0353b0958e4b1b4",
      "name": "Equalizer",
      "symbol": "EQZ",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/EQZ.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x8ee73c484a26e0a5df2ee2a4960b789967dd0415",
      "name": "Equalizer",
      "symbol": "EQZ",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/EQZ.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
      "name": "Geyser",
      "symbol": "GYSR",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/GYSR.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x117cFd9060525452db4A34d51c0b3b7599087f05",
      "name": "Geyser",
      "symbol": "GYSR",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/GYSR.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0xDA9b55DE6e04404F6c77673D4B243142a4efC6B8",
      "name": "Geyser",
      "symbol": "GYSR",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/GYSR.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x197D38DC562DfB2490eC1A1d5C4CC4319d178Bb4",
      "name": "Geyser",
      "symbol": "GYSR",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/GYSR.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xba100000625a3754423978a60c9317c58a424e3D",
      "name": "Balancer",
      "symbol": "BAL",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BAL.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921",
      "name": "Balancer",
      "symbol": "BAL",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BAL.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x41286Bb1D3E870f3F750eB7E1C25d7E48c8A1Ac7",
      "name": "Balancer",
      "symbol": "BAL",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BAL.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0xc72751efd79B153D5bdC7E1a43b4b98aA2aA04C7",
      "name": "Balancer",
      "symbol": "BAL",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/BAL.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
      "name": "Gitcoin",
      "symbol": "GTC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/GTC.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x1eba7a6a72c894026cd654ac5cdcf83a46445b08",
      "name": "Gitcoin",
      "symbol": "GTC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/GTC.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0xb7e230f904971724c600ad5217b88d219ddd1525",
      "name": "Gitcoin",
      "symbol": "GTC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/GTC.svg",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0xaf8ca653fa2772d58f4368b0a71980e9e3ceb888",
      "name": "Gitcoin",
      "symbol": "GTC",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/GTC.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 10,
      "address": "0x4200000000000000000000000000000000000042",
      "name": "Optimism",
      "symbol": "OP",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/OP.png"
    },
    {
      "chainId": 69,
      "address": "0x4200000000000000000000000000000000000042",
      "name": "Optimism",
      "symbol": "OP",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/OP.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x865377367054516e17014CcdED1e7d814EDC9ce4",
      "name": "Dola USD Stablecoin",
      "symbol": "DOLA",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DOLA.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x8aE125E8653821E851F12A49F7765db9a9ce7384",
      "name": "Dola USD Stablecoin",
      "symbol": "DOLA",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DOLA.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x39445DEc9Ba7Fb3776E8E5f9922864ddb9089304",
      "name": "Dola USD Stablecoin",
      "symbol": "DOLA",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DOLA.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x0D760ee479401Bb4C40BDB7604b329FfF411b3f2",
      "name": "Dola USD Stablecoin",
      "symbol": "DOLA",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/DOLA.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0xbb9bc244d798123fde783fcc1c72d3bb8c189413",
      "name": "TheDAO",
      "symbol": "TheDAO",
      "decimals": 16,
      "logoURI": "https://ethereum-optimism.github.io/logos/theDAO.svg",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xd8f365c2c85648f9b89d9f1bf72c0ae4b1c36cfd",
      "name": "TheDAO",
      "symbol": "TheDAO",
      "decimals": 16,
      "logoURI": "https://ethereum-optimism.github.io/logos/theDAO.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x8274ea38fe9bea66f8e7c6f3ef742b85d86aeb5d",
      "name": "TheDAO",
      "symbol": "TheDAO",
      "decimals": 16,
      "logoURI": "https://ethereum-optimism.github.io/logos/theDAO.svg",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x35597dC6f8fDc81d71b311A9E4e2710ef6accb68",
      "name": "TheDAO",
      "symbol": "TheDAO",
      "decimals": 16,
      "logoURI": "https://ethereum-optimism.github.io/logos/theDAO.svg",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x0000000000085d4780B73119b644AE5ecd22b376",
      "name": "TrueUSD",
      "symbol": "TUSD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/TUSD.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0xcB59a0A753fDB7491d5F3D794316F1adE197B21E",
      "name": "TrueUSD",
      "symbol": "TUSD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/TUSD.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0x1794230aBe1995fcFe6B14865D4B6928121AB9d9",
      "name": "TrueUSD",
      "symbol": "TUSD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/TUSD.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0xFa956eB0c4b3E692aD5a6B2f08170aDE55999ACa",
      "name": "TrueUSD",
      "symbol": "TUSD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/TUSD.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 1,
      "address": "0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6",
      "name": "Decentralized USD",
      "symbol": "USDD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDD.png",
      "extensions": {
        "optimismBridgeAddress": "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    },
    {
      "chainId": 10,
      "address": "0x7113370218f31764C1B6353BDF6004d86fF6B9cc",
      "name": "Decentralized USD",
      "symbol": "USDD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDD.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0xae73ddeafc00bc5ad03a96c2b268c3f5325c8d49",
      "name": "Decentralized USD",
      "symbol": "USDD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDD.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x1f9bd96ddb4bd07d6061f8933e9ba9ede9967550",
      "name": "Decentralized USD",
      "symbol": "USDD",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/USDD.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0xC13DD39606d4C2489ce5D9806d060FeD9a7d063d",
      "name": "Land",
      "symbol": "LAND",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LAND.png",
      "extensions": {
        "optimismBridgeAddress": "0x22F24361D548e5FaAfb36d1437839f080363982B"
      }
    },
    {
      "chainId": 69,
      "address": "0x2E2015aa4ac40B083189A03a75AD229dfB10172c",
      "name": "Land",
      "symbol": "LAND",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/LAND.png",
      "extensions": {
        "optimismBridgeAddress": "0x4200000000000000000000000000000000000010"
      }
    },
    {
      "chainId": 42,
      "address": "0xa88751C0a08623E11ff38c6B70F2BbEe7865C17c",
      "name": "Wrapped liquid staked Ether 2.0",
      "symbol": "wstETH",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/wstETH.svg",
      "extensions": {
        "optimismBridgeAddress": "0x65321bf24210b81500230dCEce14Faa70a9f50a7"
      }
    },
    {
      "chainId": 69,
      "address": "0xF9C842dE4381a70eB265d10CF8D43DceFF5bA935",
      "name": "Wrapped liquid staked Ether 2.0",
      "symbol": "wstETH",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/wstETH.svg",
      "extensions": {
        "optimismBridgeAddress": "0x2E34e7d705AfaC3C4665b6feF31Aa394A1c81c92"
      }
    }
  ],
  "version": {
    "major": 4,
    "minor": 3,
    "patch": 0
  }
}

const velodromeTokenList = {
  "name": "Velodrome Finance",
  "logoURI": "https://docs.velodrome.finance/velodrome.svg",
  "keywords": [
    "layer2",
    "amm"
  ],
  "timestamp": "2021-05-22T10:01:21.042+00:00",
  "tokens": [
    {
      "chainId": 10,
      "address": "0x4200000000000000000000000000000000000042",
      "name": "Optimism",
      "symbol": "OP",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/logos/optimism.svg"
    },
    {
      "chainId": 10,
      "address": "0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",
      "name": "Velodrome",
      "symbol": "VELO",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/velodrome.svg"
    },
    {
      "chainId": 10,
      "address": "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
      "name": "FRAX",
      "symbol": "FRAX",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/FRAX.png"
    },
    {
      "chainId": 10,
      "address": "0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be",
      "name": "Frax Share",
      "symbol": "FXS",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/FXS.png"
    },
    {
      "chainId": 10,
      "address": "0xcb8fa9a76b8e203d8c3797bf438d8fb81ea3326a",
      "name": "Alchemix USD",
      "symbol": "alUSD",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/alUSD.svg"
    },
    {
      "chainId": 10,
      "address": "0x3e29d3a9316dab217754d13b28646b76607c5f04",
      "name": "Alchemix ETH",
      "symbol": "alETH",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/alETH.svg"
    },
    {
      "chainId": 10,
      "address": "0x8aE125E8653821E851F12A49F7765db9a9ce7384",
      "name": "Dola USD Stablecoin",
      "symbol": "DOLA",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/DOLA.png"
    },
    {
      "chainId": 10,
      "address": "0x10010078a54396F62c96dF8532dc2B4847d47ED3",
      "name": "Hundred Finance",
      "symbol": "HND",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/HND.png"
    },
    {
      "chainId": 10,
      "address": "0xdfa46478f9e5ea86d57387849598dbfb2e964b02",
      "name": "Mai Stablecoin",
      "symbol": "MAI",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/MAI.svg"
    },
    {
      "chainId": 10,
      "address": "0x85f6583762Bc76d775eAB9A7456db344f12409F7",
      "name": "renBTC",
      "symbol": "RENBTC",
      "decimals": 8,
      "logoURI": "https://docs.velodrome.finance/tokens/renBTC.svg"
    },
    {
      "chainId": 10,
      "address": "0xd52f94DF742a6F4B4C8b033369fE13A41782Bf44",
      "name": "Layer2DAO",
      "symbol": "L2DAO",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/L2DAO.svg"
    },
    {
      "chainId": 10,
      "address": "0x9485aca5bbBE1667AD97c7fE7C4531a624C8b1ED",
      "name": "Angle EURO",
      "symbol": "agEUR",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/agEUR.svg"
    },
    {
      "chainId": 10,
      "address": "0x375488f097176507e39b9653b88fdc52cde736bf",
      "name": "Tarot Protocol",
      "symbol": "TAROT",
      "decimals": 18,
      "logoURI": "https://docs.velodrome.finance/tokens/TAROT.png"
    }
  ]
}

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

const StyledEthereumLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <span {...rest} alt={''} style={{ fontSize: size }} role="img" aria-label="face">
          🤔
        </span>
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues
  if (address?.toLowerCase() === '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb') {
    address = '0x42456d7084eacf4083f1140d3229471bba2949a8'
  }

  if (address?.toLowerCase() === '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f') {
    address = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'
  }

  if (address?.toLowerCase() === '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={EthereumLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  let currentLogo = null
  for (let i = 0; i < optimismTokenList["tokens"].length; i++) {
    if (address?.toLowerCase() === optimismTokenList["tokens"][i]['address'].toLowerCase()) {
      currentLogo = optimismTokenList["tokens"][i]['logoURI']
      break
    }
  }
  if (currentLogo == null) {
    for (let i = 0; i < velodromeTokenList["tokens"].length; i++) {
      if (address?.toLowerCase() === velodromeTokenList["tokens"][i]['address'].toLowerCase()) {
        currentLogo = velodromeTokenList["tokens"][i]['logoURI']
        break
      }
    }
  }

  const path = currentLogo

  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
