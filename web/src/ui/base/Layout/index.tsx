import { Layout as AntLayout, Button, Modal, theme } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { AppSidebar, AppSidebarProps, getSidebarItem } from "./Sidebar";
import { AppHeaderProps, AppHeader } from "./Header";
import { useNavigate } from "react-router-dom";
import {
  BuildingIcon,
  HomeIcon,
  MedalStar,
  MessageIcon,
  UserIcon,
} from "../svg";
import { ISidebarRoutes, WalletName } from "ui/types";
import {
  LOCAL_STORAGE_PARAMS,
  WALLETS,
  disconnectWallet,
  selectConnection,
  useAppDispatch,
  utils,
} from "application";

import WalletSelector from "./Header/wallet.selector";
import { useSelector } from "react-redux";

const ComponentContainer = styled.div`
  padding: 24px;
  minheight: 340px;
  background: ${(props) => props.theme.colorBgContainer};
`;
const ConnectedBox = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;
const { Content } = AntLayout;
const ConnectButton = styled(Button)`
  padding: 15px !important;
  background: #ee3e69;
  border-color: #ee3e69;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px !important;
  color: #fff;
  font-weight: 600;
  margin-left: 20px;
`;
export interface AppLayoutProps {
  sidebarRoutes?: ISidebarRoutes;
  sidebarProps?: Omit<AppSidebarProps, "setCollapsed" | "collapsed">;
  children: React.ReactNode;
  headerProps?: Omit<AppHeaderProps, "rightComponent"> & {
    onConnect?: (wallet: WalletName) => void;
  };
  Breadcrumb?: React.FC;
}
export const AppLayout = function ({
  children,
  Breadcrumb,
  headerProps,
  sidebarProps,
  sidebarRoutes: paths,
}: AppLayoutProps) {
  const { onConnect, ...headerDeepProps } = headerProps || {};
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [showModal, setModalDisplay] = useState<boolean>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const conn = useSelector(selectConnection);
  const dispatch = useAppDispatch();
  const { address } = conn || {};
  return (
    <AntLayout hasSider>
      <AppSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        items={[
          getSidebarItem("Home", paths?.home, <HomeIcon />),
          getSidebarItem("Profile", paths?.profile, <UserIcon />),
          getSidebarItem("DAO", paths?.dao, <BuildingIcon />),
          getSidebarItem("SBT", paths?.sbt, <MedalStar />),
          getSidebarItem("Messenger", paths?.messenger, <MessageIcon />),
        ]}
        onSelect={(key) => {
          navigate(key);
        }}
        {...sidebarProps}
      />
      <AntLayout className="site-layout" style={{ height: "100vh" }}>
        <AppHeader
          {...headerDeepProps}
          rightComponent={() =>
            address ? (
              <ConnectedBox>
                {utils.shortAddress(address)}{" "}
                <ConnectButton
                  onClick={() => {
                    dispatch(disconnectWallet());
                  }}
                  size="small"
                >
                  Disconnect
                </ConnectButton>
              </ConnectedBox>
            ) : (
              <ConnectButton onClick={() => setModalDisplay(true)} size="small">
                Connect Wallet
              </ConnectButton>
            )
          }
        />
        <Content style={{ margin: "0 16px" }}>
          {Breadcrumb && <Breadcrumb />}
          <ComponentContainer style={{ background: colorBgContainer }}>
            {children}
          </ComponentContainer>
        </Content>
      </AntLayout>
      <Modal
        title="Select Wallet"
        open={showModal}
        onCancel={() => setModalDisplay(false)}
        onOk={() => {}}
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        <WalletSelector
          wallets={WALLETS}
          onWalletSelect={(wallet) => {
            onConnect?.(wallet);
            setModalDisplay(false);
          }}
        />
      </Modal>
    </AntLayout>
  );
};
