import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store, { RootState } from "./store";
import { AppInfrastructure } from "application/utils";
import { WalletName } from "ui/types";

interface IWalletState {
  wallet?: WalletName;
  address?: string;
  accounts?: string[];
}
const initialState: IWalletState = {};

const connectionSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    disconnectWallet: (state) => {
      AppInfrastructure.disconnect();
      state = {};
      return state;
    },
    connectWallet: (state, action: PayloadAction<WalletName>) => {
      AppInfrastructure.getInfrastructure(action.payload).then((infra) => {
        if (infra)
          store.dispatch(
            setConnection({
              wallet: infra?.wallet,
              address: infra?.accounts?.[0],
              accounts: infra?.accounts,
            })
          );
      });
    },
    setConnection: (state, action: PayloadAction<IWalletState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setConnection, connectWallet, disconnectWallet } =
  connectionSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectConnection = (state: RootState) => state.connection;

export default connectionSlice.reducer;
