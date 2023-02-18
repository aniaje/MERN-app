import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import theme from "../styles/theme";

const UserCard = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px;
  box-shadow: 0px 9px 7px -1px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  background-color: ${theme.colors.lightGrey};
  transition: all ease 0.5s;
  :hover {
    opacity: 0.7;
    cursor: pointer;
    transform: translateY(-5px);
  }
  display: inline-block;
`;

const Cardheader = styled.div`
  background: ${theme.colors.blue};
  height: 100px;
  padding: 15px 8px 0px 8px;
  border-radius: 7px 7px 0px 0px;
  text-align: center;
`;

const StyledImg = styled.img`
  height: 110px;
  width: 110px;
  border-radius: 60px;
  align-items: center;
  margin: -50px 30% 0px 30%;
  border: 3px solid white;
`;

const UserName = styled.label`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const InfoContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.label`
  margin-top: 10px;
`;

const PostListItem = ({ username, name, experience }) => {
  return (
    <UserCard>
      <Cardheader>
        <UserName>{name}</UserName>
      </Cardheader>
      <StyledImg src="img.png"></StyledImg>

      <InfoContainer>
        <InfoLabel>{username}</InfoLabel>
        <InfoLabel>{experience}</InfoLabel>
        <InfoLabel></InfoLabel>
      </InfoContainer>
    </UserCard>
  );
};

export default PostListItem;
