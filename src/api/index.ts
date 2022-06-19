import {Users, Workout, WorkoutDetails} from '../types';
import axios from 'axios';

const BASE_URL = 'https://62ac850d402135c7acb35a8b.mockapi.io/v1/';

export const getUsers = async (): Promise<Users[]> => {
  try {
    const result = await axios.get(`${BASE_URL}/users`);

    if (result.status != 200) {
      throw new Error('Something went wrong');
    }

    const data: Users[] = await result.data;

    return data;
  } catch (error) {
    throw error;
  }
};

export const getWorkoutList = async (): Promise<Workout[]> => {
  try {
    const result = await axios.get(`${BASE_URL}/workout_list`);
    if (result.status != 200) {
      throw new Error('something went wrong');
    }

    const data: Workout[] = await result.data;

    return data;
  } catch (error) {
    throw error;
  }
};

type IPostUser = {
  name: string;
};

export const PostUser = async ({name}: IPostUser): Promise<any> => {
  try {
    const result = await axios.post(`${BASE_URL}/createUser`, {
      id: '1',
      createdAt: 'ewq',
      name: name,
    });
    console.log('result', result);

    if (result.status !== 200) {
      throw new Error('Something wnt wrong');
    }
    //const data:

    //return data;
  } catch (error) {}
};
