import { Button } from "antd";
import React from "react";
import { styled } from "styled-components";
import {
  DiscordIcon,
  DropdownArrow,
  EyeIcon,
  GithubIcon,
  LocationIcon,
  TelegramIcon,
  TwitterIcon,
} from "ui/base/svg";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const LeftContainer = styled.div`
  gap: 20px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const EnsNameButton = styled(Button)`
  font-family: Satoshi;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  border: dotted gray;
  color: #242d3f;
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Description = styled.div`
  width: 396px;
  height: 22px;

  font-family: Satoshi;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: gray;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Counts = styled.div`
  display: flex;
  gap: 30px;
`;
const Media = styled(Description)`
  gap: 10px;
  display: flex;
`;

const Connection = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 6px 12px;
  gap: 5px;
  background: #fff4f7;
  border: 1px solid #ee3e69;
  border-radius: 255px;
  color: gray;
`;
const Wallet = styled.div`
  font-family: Satoshi;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-transform: lowercase;
  color: #ee3e69;
`;
const PublicVersion = styled.div`
  direction: rtl;
`;

export interface ProfileHeaderContentProps {
  location?: string;
  description?: React.ReactNode;
  ensName?: string;
  counts?: {
    friends?: number;
    collectibles?: number;
  };
  records?: Record<string, string> & {
    "com.twitter"?: string;
    "com.github"?: string;
    "com.discord"?: string;
    "com.telegram"?: string;
  };
}
export const ProfileHeaderContent: React.FC<ProfileHeaderContentProps> = ({
  ensName,
  description,
  location,
  counts,
  records,
}) => {
  const {
    "com.twitter": twitter,
    "com.github": github,
    "com.discord": discord,
    "com.telegram": telegram,
  } = records || {};
  return (
    <Root>
      <LeftContainer>
        <EnsNameButton>
          {ensName} <DropdownArrow />
        </EnsNameButton>
        <Body>
          <Description>{description}</Description>
          <Description>
            <LocationIcon /> {location || "No location"}
          </Description>
          <Description>
            <Counts>
              <span>{shortCount(counts?.friends || 0)} Friends</span>
              <span>{shortCount(counts?.collectibles || 0)} Collectibles</span>
            </Counts>
          </Description>
          <Media>
            {twitter && <a href={twitter}>{<TwitterIcon />}</a>}
            {discord && <a href={discord}>{<DiscordIcon />}</a>}
            {telegram && <a href={telegram}>{<TelegramIcon />}</a>}
            {github && <a href={github}>{<GithubIcon />}</a>}
          </Media>
        </Body>
      </LeftContainer>
      <RightContainer>
        <Connection>
          Wallet Connected: <Wallet>{ensName}</Wallet>
        </Connection>
        <PublicVersion>
          Preview Public Version <EyeIcon />
        </PublicVersion>
      </RightContainer>
    </Root>
  );
};

function shortCount(value: number): string {
  const length = String(value).length;
  if (length > 3 && length < 6) return Number(value / 1000).toFixed(1) + "K";
  else if (length > 6 && length < 9)
    return Number(value / 1000000).toFixed(1) + "M";
  else if (length > 9) return Number(value / 1000000000).toFixed(1) + "B";
  return "";
}
