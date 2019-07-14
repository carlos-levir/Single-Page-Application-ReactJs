import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(to bottom right, #009cde, #0073cc);
  flex-direction: column;

  transition: all 0.2s ease 0s;

  &:hover {
    width: 240px;
  }
`;

export const SidebarLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding-top: 10px;
  color: #eee;

  &:hover {
    color: #fff;
  }
`;
