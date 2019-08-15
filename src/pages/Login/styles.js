import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #F5F5F5;
  justify-content: center;
  alignItems: center;
  padding: 0 30px;
`;

export const Logo = styled.Image``;

export const Input = styled.TextInput`
  height: 46px;
  align-self: stretch;
  background: #FFF;
  border-width: 1px;
  border-color: #DDD;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 46px;
  align-self: stretch;
  background: #DF4723;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
`;