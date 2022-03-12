import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

export const Container = styled.div`
  background: linear-gradient(to right,#cb11ab 0,#481173 100%) no-repeat;
  color:  #fff;
  padding: 30px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    padding-left: 0;
  }
`;

export const Burger = styled(MenuOutlined)`
  border: 1px solid rgba(255,255,255,.4);
  border-radius: 8px;
  padding: 9px;
  font-size: 25px;
`;

export const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  
  p {
    opacity: .6;
  }
`;

export const HeaderItem = styled.div`
  padding-left: 25px;
`;
