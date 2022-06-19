import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import AddUser from './AddUser';

type PropsTy = {
  bgColor: string;
};

const Container = styled.View<PropsTy>`
  flex: 1;
  background-color: ${(bgColor: PropsTy) => bgColor};
  justify-content: space-between;
`;

const Bottom: React.FC<PropsTy> = ({bgColor}: PropsTy): JSX.Element => {
  return (
    <Container bgColor={bgColor}>
     <AddUser />
    </Container>
  );
};

export default Bottom;
