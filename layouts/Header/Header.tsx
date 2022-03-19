import React from 'react';
import {
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
import { 
  Container, 
  Burger, 
  Logo, 
  Login, 
  HeaderItem, 
  HeaderInput, 
  Basket } from './Header.styled';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderItem>
        <Burger style={{ cursor: 'pointer' }} />
      </HeaderItem>
      <Logo>
        <img src="https://static.wbstatic.net/i/header/logo-v1.svg"  alt="" />
      </Logo>
      <HeaderInput>
        <Input size="middle" placeholder="Я ищу..." prefix={<SearchOutlined />} />
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
