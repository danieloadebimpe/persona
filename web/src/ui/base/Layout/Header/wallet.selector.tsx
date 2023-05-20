import React from "react";
import styled from "styled-components";
import { Wallet, WalletName } from "ui/types";

const MediumLogo = styled.img`
  height: 24px;
  width: 24px;
`;
const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;
const InnerText = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: black;
  line-height: 1.5rem;
  margin-left: 0.5rem;
`;
const Heading = styled.div`
  font-weight: 400;
  font-size: 1.25rem;
  color: black;
  line-height: 1.75rem;
`;
const SelectBorder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  cursor: pointer;
  // border: 1px solid;
  &:hover {
    border: 1px solid;
  }
  box-sizing: border-box;
  border-radius: 0.375rem;
  height: 4rem;
  padding: 1rem;
`;
export function WalletSelector({
  onWalletSelect,
  wallets,
}: {
  onWalletSelect: (wallet: WalletName) => void;
  wallets?: Wallet[];
}) {
  return (
    <Root>
      <Heading>Choose a Network to connect to</Heading>
      {wallets?.map((item, index: number) => {
        return (
          <SelectBorder key={index} onClick={() => onWalletSelect(item.name)}>
            <MediumLogo
              src={`/assets/wallets/${item.name}.svg`}
              alt={item.name}
            />
            <InnerText>{item.label}</InnerText>
          </SelectBorder>
        );
      })}
    </Root>
  );
}

export default WalletSelector;
