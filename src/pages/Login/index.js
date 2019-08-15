import React, { useState } from 'react';
import { Container, Logo, Input, Button, Text } from './styles';
import { Platform } from 'react-native';

import logo from '../../assets/logo.png';

export default function Login() {

  const [username, setUserName] = useState('');

  return (
    <Container
      behavior='padding'
      enabled={Platform.OS === 'ios'}
    >
      <Logo source={logo} />
      <Input
        placeholder="Digite seu usuário do Github"
        placeholderTextColor='#999'
        autoCapitalize='none'
        autoCorrect={false}
        value={username}
        onChangeText={e => setUserName(e)}
      />
      <Button>
        <Text>Entrar</Text>
      </Button>
    </Container>
  );
}
