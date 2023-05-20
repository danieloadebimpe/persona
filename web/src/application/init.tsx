import React, { useEffect } from "react";
import { LOCAL_STORAGE_PARAMS } from "./utils";
import { connectWallet, useAppDispatch } from "./redux";
import { WalletName } from "ui/types";

export const AppInitAdapter = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const wallet = localStorage.getItem(LOCAL_STORAGE_PARAMS.wallet);
    if (wallet) {
      dispatch(connectWallet(wallet as WalletName));
    }
  });
  return <>{children}</>;
};
