import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  border-radius: 20px;
  height: 40px;
  width: 100px;
  padding: 12px;
  background-color: #f15152;
  align-items: center;
`;

const Button = ({title, onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
};

export default Button;
