import React from 'react';
import {Text} from 'react-native';
import {Container, Top, Logo, Title} from './styles';
import logo from '~/assets/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <>
      <Container>
        <Top>
          <Logo source={logo} />
          <Title>Thiago Hagy</Title>
        </Top>
        <Icon name="keyboard-arrow-down" size={30} color="#fff" />
      </Container>
    </>
  );
}
