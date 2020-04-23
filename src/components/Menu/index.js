import React from 'react';
import {View, Text } from 'react-native';
import {WebView} from 'react-native-webview';

import QRCode from 'react-native-qrcode';
import { Container, Code , Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 250],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode 
          value={"http://google.com.br"} 
          size={80}
          fgColor="#fff"
          bgColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurações do cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Confgurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
