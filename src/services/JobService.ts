import { IJob, IJobSubmit } from '../types/Job';
import store from '../store';
export interface IJobService {
  /**
   * Retrieves all jobs for current user
   */
  getMyJobs(query?: string): Promise<IJob[]>;

  /**
   * Get Siingle ID
   */
  getJob(uuid: string): Promise<IJob>;

  /**
   * Create a job
   */
  createJob(data: IJobSubmit): Promise<IJob>;

  /**
   * Update a job
   */
  updateJob(uuid: string, data: IJobSubmit): Promise<IJob>;
}

export default class JobService implements IJobService {
  constructor(private _axios: any) {}

  private setHeaders() {
    return {
      headers: { Authorization: `Bearer ${store.getters.jwt}` },
    };
  }

  async getMyJobs(query?: string): Promise<IJob[]> {
    const res = await this._axios.get(`/jobs?${query}`, this.setHeaders());
    return res.data;
  }

  async getJob(uuid: string): Promise<IJob> {
    const res = await this._axios.get(`/jobs/${uuid}`, this.setHeaders());
    return res.data;
  }

  async createJob(data: IJobSubmit): Promise<IJob> {
    const res = await this._axios.post(`/jobs`, data, this.setHeaders());
    return res.data;
  }

  async updateJob(uuid: string, data: IJobSubmit): Promise<IJob> {
    const res = await this._axios.patch(
      `/jobs/${uuid}`,
      data,
      this.setHeaders(),
    );
    return res.data;
  }
}
