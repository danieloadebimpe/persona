import { Key } from "react";

export type ExplorerName = "Etherscan" | "Polygonscan" | "Bscscan" | "Explorer";
export type NetowrkExplorerPath = "address" | "transaction" | "block";
export type SupportedNetworkId = "56" | "97" | "80001" | "137";
export type ISwap = "pancakeSwap" | "quickSwap" | "smartSwap" | "p2p";
export type INFT = "opensea" | "nftTrade" | "refinable";
export type WalletName =
  | "binance"
  | "metamask"
  | "trustWallet"
  | "walletConnect";
export interface Wallet {
  label: string;
  name: WalletName;
}
export interface NetowrkExplorer {
  label: ExplorerName;
  url: {
    base: string;
    addressPath: string;
    txPath: string;
    blockPath: string;
  };
}
export interface Network {
  label: string;
  id: SupportedNetworkId;
  url?: string;
  symbol: string;
  name: string;
  decimals: number;
  explorer: NetowrkExplorer;
  blockTxs: number;
}

export interface ISidebarRoutes {
  home: Key;
  profile: Key;
  dao: Key;
  sbt: Key;
  messenger: Key;
}
