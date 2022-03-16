import { IUser } from './Auth';

export enum JobStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface IJob {
  id: number;
  uuid: string;
  title: string;
  description: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  status: JobStatus;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}

export interface IJobForm {
  title: string;
  description: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface IJobResponse {
  data?: IJob[];
  statusCode?: number;
  message?: string;
  error?: string;
}

export interface IJobSubmit {
  title: string;
  description?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}
