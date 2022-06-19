export type Users = {
  ceratedAt: string;
  name: string;
  id: string;
  edit: boolean;
};

export type WorkoutDetails = {
  name: string;
  description: string;
};

export type Workout = Users & {
  details: WorkoutDetails;
};
