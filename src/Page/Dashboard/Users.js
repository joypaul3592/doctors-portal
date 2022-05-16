import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheard/Loading';
import UserRow from './UserRow';

const Users = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h2>All Users: {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <UserRow user={user} refetch={refetch} key={user._id}></UserRow>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;