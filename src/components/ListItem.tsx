import {View, Text} from 'react-native';
import React from 'react';
import styledComponents from 'styled-components/native';
import Button from './Button';
import {Users} from '../types';

const Container = styledComponents.View`
    padding:4px;
    flex-direction:row
  `;
type Props = {
  item: Users;
  index: number;
  onPressEdit: (id: string) => void;
  onPressDelete: (id: string) => void;
};

type EditFnType = ReturnType<(id: string) => void>;

const ListItem: React.FC<Props> = ({
  item,
  index,
  onPressEdit,
  onPressDelete,
}: Props): JSX.Element => {
  const onPressEdit_ = (): EditFnType => {
    onPressEdit(item.id);
  };

  const onPressDelete_ = (): EditFnType => {
    onPressDelete(item.id);
  };

  return (
    <Container testID={`row-${index}`}>
      <Text>{item?.name}</Text>
      <Button onPress={onPressEdit_} title={'Edit'} />
      <Button onPress={onPressDelete_} title={'Delete'} />
    </Container>
  );
};

export default ListItem;
