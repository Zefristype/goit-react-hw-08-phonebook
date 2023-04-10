import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 16px 0;
  font-size: 18px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  color: #fff;
  text-decoration: none;
  transform: scale(1);
  transition: transform 200ms ease-out;
  ::after {
    content: '';
    display: block;
    transform: scaleX(0);

    height: 2px;
    border-radius: 30px;
    background-color: #fff;
    transition: transform 200ms ease-out;
  }
  &.active {
    transform: scale(1.25);
    ::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      border-radius: 30px;
      transform: scaleX(1);
      background-color: #fff;
    }
  }
`;
