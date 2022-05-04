import { Link } from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTwitter} from '@fortawesome/free-solid-svg-icons';

export const Header = function () {
    return (
        <HeaderContainer>
            <FontAwesomeIcon icon="{faTwitter}" />
            <nav>
                <CustomLink $background="red" to="/">
                    Home
                </CustomLink>
                <CustomLink to="user-account">User Account</CustomLink>
                <CustomLink to="contact">Contact</CustomLink>
            </nav>
        </HeaderContainer>
    );
};

const CustomLink = styled(Link)`
  background-color: ${({ $background }) =>
    $background ? $background : "unset"};
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
  color: #545454;
  &:hover {
    color: #1ea7fd;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  box-shadow: 0px 0px 1px rgba(33, 38, 46, 0.18),
    0px 0px 2px rgba(33, 38, 46, 0.18);
`;
