import React from 'react';
import {
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
import Image from 'next/image';

import {
  Container,
  Burger,
  Logo,
  Login,
  HeaderItem,
  HeaderInput,
  Basket,
  SpanBurger,
  SpanCenter,
  SpanTop,
  SpanBottom,
} from './Header.styled';

const logoLoader = () => {
  return 'https://static.wbstatic.net/i/header/logo-v1.svg'
}

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderItem>
        <Burger>
          <SpanTop />
          <SpanCenter />
          <SpanBottom />
        </Burger>
      </HeaderItem>
      <Logo>
        <Image 
          src="https://static.wbstatic.net/i/header/logo-v1.svg"  
          loader={logoLoader}
          alt="logo" 
          width={240}
          height={64}
        />
      </Logo>
      <HeaderInput>
        <Input
          size="middle"
          placeholder="Я ищу..."
          prefix={<SearchOutlined />}
        />
      </HeaderInput>
      <Login>
        <UserOutlined />
        <p style={{ margin: 0 }}>Войти</p>
      </Login>
      <Basket>
        <ShoppingOutlined />
        <p style={{ margin: 0 }}>Корзина</p>
      </Basket>
    </Container>
  );
};

export { Header };
