import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import Button from './Button';
import {PostUser} from '../api';

type Props = {};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const InputContainer = styled.TextInput`
  height: 40px;
  width: 100px;
`;

const AddUser: React.FC<Props> = ({}: Props): JSX.Element => {
  const [UserName, SetUserName] = useState<string>('');

  const onPressAddUser = (): void => {
    PostUser({
      name: UserName,
    });
  };

  return (
    <Container>
      <InputContainer
        value={UserName}
        placeholder={'Username'}
        onChangeText={SetUserName}
      />
      <Button title={'Add User'} onPress={onPressAddUser} />
    </Container>
  );
};

export default AddUser;
