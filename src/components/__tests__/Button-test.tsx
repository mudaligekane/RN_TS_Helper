import React from 'react';
import {render} from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('shoud show test', () => {
    let txt = 'GET Users';
    const {getByText} = render(<Button title={txt} />);

    const title = getByText(txt);

    expect(title).toBeTruthy();
  });
});
