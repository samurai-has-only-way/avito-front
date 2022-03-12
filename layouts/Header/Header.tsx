import React from 'react';
import {
  SearchOutlined,
  LoginOutlined,
} from '@ant-design/icons';

import { Container, Burger, Logo, Login, HeaderItem } from './Header.styled';
import { Input } from 'antd';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderItem>
        <Burger style={{ cursor: 'pointer' }} />
      </HeaderItem>
      <Logo>WILDBERRIES</Logo>
      <HeaderItem>
        <Input size="middle" placeholder="search" prefix={<SearchOutlined />} />
      </HeaderItem>
      <Login>
        <LoginOutlined />
        <p style={{ margin: 0 }}>Войти</p>
      </Login>
      <Login>
        <LoginOutlined />
        <p style={{ margin: 0 }}>Войти</p>
      </Login>
    </Container>
  );
};

export { Header };
