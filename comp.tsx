import { useEffect } from 'react';
import { fetchUsers } from './userSlice';
import { useAppDispatch, useAppSelector } from './hooks';

const UserList = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const status = useAppSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
};

export default UserList;



