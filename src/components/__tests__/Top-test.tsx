import React from 'react';
import { render , fireEvent, act} from '@testing-library/react-native';
import axios from 'axios';
import Top from '../Top';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Top Container', () => {
  it('fetch successfully data from API', async () => {
    const mockData = [
      {
        createdAt: '2022-06-17T00:10:47.672Z',
        id: '1',
        name: 'Francis Cole PhD',
      },
      {
        createdAt: '2022-06-17T00:10:47.672Z',
        id: '1',
        name: 'Francis Cole PhD',
      },
    ];

    const { getByTestId , getByText} = render(<Top />);

    mockedAxios.get.mockResolvedValue(mockData);

    const btn = getByText('GET Users');

    fireEvent.press(btn);
  });

  it('to match snapshot', async () => {
    const tree = render(<Top/>);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', async () => {
    const tree = render(<Top/>).toJSON();
    expect(tree.children.length).toBe(4);
  });
});
