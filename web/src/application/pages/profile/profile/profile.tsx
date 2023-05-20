import React from "react";
import styled from "styled-components";
import { ProfileHeader, ProfileHeaderProps } from "./ProfileHeader";

const Root = styled.div``;
export interface ProfileProps {
  headerProps?: ProfileHeaderProps;
}
export const Profile: React.FC<ProfileProps> = ({ headerProps }) => {
  return (
    <Root>
      <ProfileHeader {...headerProps} />
    </Root>
  );
};
