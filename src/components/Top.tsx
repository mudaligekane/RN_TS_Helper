import React, {useState} from 'react';

import {Text, ListRenderItemInfo} from 'react-native';
import styled from 'styled-components/native';
import {getUsers} from '../api';
import {Users} from '../types';
import Button from './Button';
import ListItem from './ListItem';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #f4d8cd;
`;

const T_Input = styled.TextInput.attrs({
  placeholderTextColor: 'yellow',
})`
  height: 50px;
  width: 200px;
  background-color: #1e555c;
  color: white;
`;

const List = styled.FlatList`
background-color:'white
`;

type DeleteReturn = {
  delete:boolean;
}

const Top = () => {
  const [UsersList, SetUsers] = useState<Users[]>([]);

  const GetUsersOnPress = async () => {
    const result = await getUsers();
    if (result.length > 0) {
      SetUsers(result);
    }
  };

  const onPressEdit = (index: string): void => {
    let copyUserList = [...UsersList];
    copyUserList.map((f: Users) => {
      if (f.id === index) {
        f.edit = true;
      }
    });
    SetUsers(copyUserList);
  };



  const onPressDelete = (index: string): DeleteReturn => {
    let copyUserList = [...UsersList];
    let newLi: Users[] = copyUserList.filter((f: Users) => f.id !== index);
    SetUsers(newLi);
    return {delete: true};
  };

  return (
    <Container>
      <Text>Top</Text>

      <Button onPress={GetUsersOnPress} title={'GET Users'} />

      <List
        testID={'List.user'}
        data={UsersList}
        renderItem={({item, index}: ListRenderItemInfo<Users>) => (
          <ListItem
            onPressEdit={onPressEdit}
            onPressDelete={onPressDelete}
            item={item}
            index={index}
          />
        )}
      />
      <T_Input placeholder={'Hello Input'} />
    </Container>
  );
};

export default Top;
