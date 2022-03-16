import {
  IAuthCredentials,
  IAuthRefreshCredentials,
  ISignInResponse,
  IUser,
} from '../types/Auth';
import store from '../store';
import router from '../router';

const BASE_URL = '/auth';

export interface IAuthService {
  /**
   * Log in to account
   */
  signin(credentials: IAuthCredentials): Promise<ISignInResponse>;

  /**
   * Create an account
   */
  signup(credentials: IAuthCredentials): Promise<IUser>;

  /**
   * Refresh our authentication
   */
  refresh(credentials: IAuthRefreshCredentials): Promise<IUser>;

  /**
   * Log a user out
   */
  signout(): void;
}

export default class AuthService implements IAuthService {
  constructor(private _axios: any) {}

  async signin(credentials: IAuthCredentials): Promise<ISignInResponse> {
    const { email, password } = credentials;

    const res = await this._axios.post(`${BASE_URL}/signin`, {
      email,
      password,
    });

    this.updateAccess(res.data);
    return res.data;
  }

  async signup(credentials: IAuthCredentials): Promise<IUser> {
    const { email, password } = credentials;

    const res = await this._axios.post(`${BASE_URL}/signup`, {
      email,
      password,
    });
    return res.data;
  }

  async refresh(credentials: IAuthRefreshCredentials): Promise<IUser> {
    const { email, refreshToken } = credentials;

    const res = await this._axios.post(`${BASE_URL}/refresh`, {
      email,
      refreshToken,
    });
    this.updateAccess(res.data);
    return res.data;
  }

  signout(): void {
    store.commit('setAccessToken', '');
    store.commit('setRefreshToken', '');
    store.commit('setAccessExpires', '');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessExpires');
    router.push({ path: '/login' });
  }

  private updateAccess(tokens: ISignInResponse) {
    store.commit('setAccessToken', tokens.accessToken);
    localStorage.setItem('accessToken', tokens.accessToken);
    store.commit('setRefreshToken', tokens.refreshToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);

    const expires = new Date();
    expires.setHours(expires.getHours() + 1);
    store.commit('setAccessExpires', expires.toString());
    localStorage.setItem('accessExpires', expires.toString());
  }
}
