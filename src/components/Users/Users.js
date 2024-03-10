import React, { useEffect } from 'react';
import { useGlobalContext } from '../../globalContext/context';
import { fetchUsers } from '../../api/api';

const Users = () => {
  const { state, dispatch } = useGlobalContext();
  console.log('state', state);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchUsers();
        dispatch({ type: 'GET_USERS', data: users });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, [dispatch]);

  return (
    <div>
      <h2>Users</h2>
      {/* Render users data here */}
    </div>
  );
};

export default Users;
