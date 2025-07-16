import { tesloApi } from '@/api/TesloApi';
import { User, type AuthResponse } from '../interfaces';
import { isAxiosError } from 'axios';
import { ok } from 'assert';

interface LoginError {
  ok: false;
  message: string;
}
interface LoginSuccess {
  ok: true;
  user: User;
  token: string;
}

export const loginActions = async (
  email: string,
  password: string,
): Promise<LoginError | LoginSuccess> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/login', {
      email,
      password,
    });
    return {
      ok: true,
      user: data.user,
      token: data.token,
    };
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 401) {
      return {
        ok: false,
        message: 'Usuario o contraseña incorrecto',
      };
    }
    console.log(error);
    throw new Error('No se puede realizar la accion');
  }
};
