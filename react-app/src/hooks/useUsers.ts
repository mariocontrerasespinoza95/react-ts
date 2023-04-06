import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import userService, { User } from '../services/user-service';

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const { request, cancel } = userService.getAll<User>();

        request
            .then(({ data: fetchedUsers }) => {
                setUsers(fetchedUsers);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;

                setError(err.message);
                setLoading(false);
            });

        return () => cancel();
    }, []);

    const deleteUser = (user: User) => {
        const originalUsers = [...users];
        setUsers(users.filter((u) => u.id !== user.id));

        userService.delete(user.id).catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
        });
    };

    const addUser = () => {
        const originalUsers = [...users];
        const newUser = { id: 0, name: 'Mario' };
        setUsers([newUser, ...users]);

        userService
            .create(newUser)
            .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
            .catch((err) => {
                setError(err.message);
                setUsers(originalUsers);
            });
    };

    const updateUser = (user: User) => {
        const originalUsers = [...users];
        const updatedUser = { ...user, name: user.name + '!' };
        setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

        userService.update(updatedUser).catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
        });
    };

    return {
        users,
        error,
        isLoading,
        setUsers,
        setError,
        addUser,
        updateUser,
        deleteUser,
    };
};

export default useUsers;
