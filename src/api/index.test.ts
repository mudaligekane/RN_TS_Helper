import axios, {AxiosResponse} from 'axios';
import {getUsers, getWorkoutList} from '.';

jest.mock('axios');

const mockedAxiosType = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  axios.get.mockClear();
});



describe('getAll API Methods', () => {
  it('should return users list', async () => {
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
    const mockResponse: AxiosResponse = {
      data: mockData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    mockedAxiosType.get.mockResolvedValueOnce(mockResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getUsers();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(mockData);
  });

  it('should return workout list', async () => {
    //create mock dataset
    //create mock response

    const mockData = [
      {
        createdAt: '2022-06-17T15:31:28.386Z',
        details: {
          name: 'Emiliano',
          description: 'Kassulke',
        },
        id: '1',
      },
      {
        createdAt: '2022-06-17T15:31:28.386Z',
        details: {
          name: 'Emiliano',
          description: 'Kassulke',
        },
        id: '2',
      },
    ];

    const mockResponse: AxiosResponse = {
      data: mockData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockedAxiosType.get.mockResolvedValueOnce(mockResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const data = await getWorkoutList();
    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(mockData);
  });
});
