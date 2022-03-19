import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

export const Container = styled.div`
  background: linear-gradient(to right,#cb11ab 0,#481173 100%) no-repeat;
  color:  #fff;
  padding: 30px 20px;
  display: flex;
  align-items: center;
`;

export const Burger = styled(MenuOutlined)`
  border: 1px solid rgba(255,255,255,.4);
  border-radius: 8px;
  padding: 9px;
  font-size: 25px;
`;

export const Logo = styled.div`
  margin: 0 0 0 20px;
`;

export const HeaderInput = styled.div`
  
.ant-input-affix-wrapper{
  background: rgba(255,255,255, .2);
  border-radius: 56px;
  padding: 16px 120px 16px 26px;
  margin: 0 30px 0 15px;
  width: 60vw;
}

.ant-input-affix-wrapper>span>span>svg{
  width: 20px;
  height: 20px;
  fill: rgba(255,255,255, .2);
}

  .ant-input-affix-wrapper > input.ant-input{
    width: 100%;

    font-size: 18px;
    line-height: 24px;
    
    background: none;
    border: none;
    outline: none;
    color: rgba(255,255,255,.5);
  }

`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  
  p {
    opacity: .6;
  }

  svg{
    width:25px;
    height: 25px;
  }
`;

export const Basket = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 0 30px;
  cursor: pointer;
  
  svg{
    width:25px;
    height: 25px;
  }

  p {
    opacity: .6;
  }
`;

export const HeaderItem = styled.div`
  padding-left: 25px;
`;
