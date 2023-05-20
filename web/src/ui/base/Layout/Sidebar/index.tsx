import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import { PersonaIcon } from "ui/base/svg";

const { Sider } = Layout;
export type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
export { getItem as getSidebarItem };
export interface AppSidebarProps {
  collapsed: boolean;
  setCollapsed?: (collapsed: boolean) => void;
  items?: MenuItem[];
  onSelect?: (key: string) => void | undefined;
}
export const AppSidebar: React.FC<AppSidebarProps> = function ({
  collapsed,
  setCollapsed,
  items,
  onSelect,
}) {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed?.(value)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <PersonaIcon />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onSelect={(value) => onSelect?.(value.key)}
      />
    </Sider>
  );
};
