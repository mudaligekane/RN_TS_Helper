import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import AddUser from '../AddUser';

describe('AddUser', () => {
  it('should show renders correctly', () => {
    const tree = render(<AddUser />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it('should add user name, when update text input', () => {
    const {getByPlaceholderText, getByText} = render(<AddUser />);

    const Input = getByPlaceholderText('Username');
    const Button = getByText('Add User');

    const mockInsertUserFn = jest.fn();
    mockInsertUserFn.mockReturnValue('test');

    const mockAddUserFn = jest.fn();

    fireEvent.changeText(Input, 'test');

    //expect(mockInsertUserFn).toBeCalledWith('test');
    //expect(mockInsertUserFn.mock.results[0]).toStrictEqual('test');

    fireEvent.press(Button);
    //expect(mockAddUserFn).toBeCalledWith('test');
  });
  it('should add add user, when press add button', () => {});
});
