import { apiPath, apiEndpoints, METHODS } from './apiPath';

export const api = {
  async createUser(name: string, email: string, password: string) {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.signup}`, {
        method: METHODS.post,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(response);
        this.signInUser(name, email, password);
        return data;
      } else if (response.status === 409) {
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Registration failed');
    }
  },
  async signInUser(name: string, email: string, password: string): Promise<string | number> {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.signin}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else if (response.status === 403) {
        return response.status;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Authorization failed');
    }
  },
  async getAllUsers() {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.users}`, {
        method: METHODS.get,
        // headers: {
        //   Authorization: `Bearer ${getFromLocalStorage('$token')}`,
        // },
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Failed get all users');
    }
  },
  async getUser(id: number) {
    try {
      const response = await fetch(`${apiPath}${apiEndpoints.users}/${id}`, {
        method: METHODS.get,
        // headers: {
        //   Authorization: `Bearer ${getFromLocalStorage('$token')}`,
        // },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Failed get user');
    }
  },
};
