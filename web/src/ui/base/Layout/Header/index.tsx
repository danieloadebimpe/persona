import { Layout, theme } from "antd";
import React from "react";
import styled from "styled-components";

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  padding-inline: 16px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
`;
export interface AppHeaderProps {
  title?: React.ReactNode;
  rightComponent?: React.FC;
}
export const AppHeader: React.FC<AppHeaderProps> = function ({
  title,
  rightComponent: RightComponent,
}) {
  const {
    token: { colorBgTextActive },
  } = theme.useToken();
  return (
    <StyledHeader style={{ color: colorBgTextActive }}>
      <div>{title}</div>
      {RightComponent && <RightComponent />}
    </StyledHeader>
  );
};
