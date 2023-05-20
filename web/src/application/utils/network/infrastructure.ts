import { LOCAL_STORAGE_PARAMS, NETWORKS } from "../constants";
import { WalletName } from "ui/types";
import Web3 from "web3";
import getWeb3 from "./getWeb3";

export interface Infra {
  supportedIds: string[];
  web3: Web3;
  accounts: string[] | undefined;
  wallet: WalletName;
}
export class AppInfrastructure {
  static web3: any;
  static infraAccounts: string[] | undefined;
  static supportedIds = [...NETWORKS.map((item) => item.id)];
  static wallet: string | undefined;

  protected async init(wallet: WalletName) {
    const { web3, accounts } = await getWeb3(wallet);
    AppInfrastructure.web3 = web3;
    AppInfrastructure.infraAccounts = accounts;
    AppInfrastructure.wallet = wallet;
    if (accounts?.[0]) {
      localStorage.setItem(LOCAL_STORAGE_PARAMS.address, accounts?.[0]);
      localStorage.setItem(LOCAL_STORAGE_PARAMS.wallet, wallet);
    }
  }
  static async disconnect() {
    AppInfrastructure.web3 = undefined;
    AppInfrastructure.infraAccounts = undefined;
    AppInfrastructure.wallet = undefined;
    localStorage.removeItem(LOCAL_STORAGE_PARAMS.address);
    localStorage.removeItem(LOCAL_STORAGE_PARAMS.wallet);
  }
  protected static async getWeb3(wallet: WalletName) {
    if (!this.web3) {
      const infra = new AppInfrastructure();
      await infra.init(wallet);
    }
    return this.web3;
  }
  protected static async getAccounts(wallet: WalletName) {
    if (!this.infraAccounts) {
      const infra = new AppInfrastructure();
      await infra.init(wallet);
    }
    return this.infraAccounts;
  }
  static async getInfrastructure(
    wallet: WalletName
  ): Promise<Infra | undefined | null> {
    if (!wallet) return null;
    return {
      supportedIds: this.supportedIds,
      web3: await this.getWeb3(wallet),
      accounts: await this.getAccounts(wallet),
      wallet,
    };
  }
}
export default AppInfrastructure;
