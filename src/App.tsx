import React from 'react';
import { Header } from './components/header/Header';
import { User } from './components/user/User';
import { Users } from './components/users/Users';
import { Authentication } from './pages/authentication/Authentication';
import './main-style.scss';

// export const api = {
//   async getAllUsers() {
//     try {
//       const response = await fetch(`https://reqres.in/api/users`, {
//         method: 'GET',
//         // headers: {
//         //   Authorization: `Bearer ${getFromLocalStorage('$token')}`,
//         // },
//       });
//       if (response.ok) {
//         const data = await response.json();
//         return data;
//       } else {
//         return await Promise.reject(new Error(response.statusText));
//       }
//     } catch (error) {
//       throw new Error('Failed get all users');
//     }
//   },
// };

// console.log(api.getAllUsers());

function App() {
  return (
    <div>
      <Header />
      {/* <User /> */}
      <Users />
      {/* <Authentication /> */}
    </div>
  );
}

export default App;
