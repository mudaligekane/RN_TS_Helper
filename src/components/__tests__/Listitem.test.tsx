import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ListItem from '../ListItem';

describe('Test List Item', () => {
  it('should click delete button and delete user', () => {
    const mockUserEditFun = jest.fn();
    const mockUserDeleteFn = jest.fn();
    //mockUserEditFun.mockReturnValue({edit: true});
    mockUserDeleteFn.mockReturnValue({delete: true});

    const {getByText} = render(
      <ListItem
        index={1}
        item={{
          id: '1',
          ceratedAt: 'home',
          name: 'test',
          edit: false,
        }}
        onPressEdit={mockUserEditFun}
        onPressDelete={mockUserDeleteFn}
      />,
    );

    fireEvent.press(getByText('Delete'));

    expect(mockUserDeleteFn).toBeCalledWith('1');
    //expect(mockUserEditFun).toBeCalledWith('1');

    expect(mockUserDeleteFn.mock.results[0].value).toStrictEqual({
      delete: true,
    });
  });
});
