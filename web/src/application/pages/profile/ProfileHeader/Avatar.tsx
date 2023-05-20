import { Button } from "antd";
import React from "react";
import { styled } from "styled-components";
import { DropdownArrow, EditIcon } from "ui/base/svg";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;
const Image = styled.img``;
const ImageBox = styled.div`
  position: relative;
  border: solid 1px gray;
  width: 162px;
  height: 162px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;
const ImageContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 142px;
  height: 142px;
  background: #f5dee3;
  border-radius: 100px;
`;
const EditIconContainer = styled.div`
  position: absolute;
  top: 75%;
  left: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: #db2c57;
  border: 4px solid #ffffff;
  border-radius: 30px;
`;
const Edit = styled(EditIcon)`
  cursor: pointer;
`;
const ButtonDropdown = styled(Button)`
  margin-top: 20px;
  color: #ee3e69;
  border: solid 1px #ee3e69;
  border-radius: 20px;
`;
export interface ProfileAvatarProps {
  avatar?: string;
  onEditBtnClick?: React.MouseEventHandler;
  guild?: string;
  allGuilds?: string[];
}
export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  avatar,
  guild,
  onEditBtnClick,
}) => {
  return (
    <Root>
      <ImageBox>
        <ImageContainer>
          <Image src={avatar} />
        </ImageContainer>
        <EditIconContainer>
          <Edit onClick={onEditBtnClick} />
        </EditIconContainer>
      </ImageBox>
      <ButtonDropdown style={{ marginTop: 20 }}>
        {guild} <DropdownArrow style={{ marginLeft: 10 }} />
      </ButtonDropdown>
    </Root>
  );
};
