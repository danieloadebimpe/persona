import React from "react";
import { styled } from "styled-components";
import { ProfileAvatar, ProfileAvatarProps } from "./Avatar";
import { ProfileHeaderContent, ProfileHeaderContentProps } from "./Content";

const Root = styled.div`
  display: flex;
  gap: 20px;
`;
export interface ProfileHeaderProps extends ProfileHeaderContentProps {
  avatarProps?: ProfileAvatarProps;
}
export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  avatarProps,
  ...headerContent
}) => {
  return (
    <Root>
      <ProfileAvatar {...avatarProps} />
      <ProfileHeaderContent {...headerContent} />
    </Root>
  );
};
