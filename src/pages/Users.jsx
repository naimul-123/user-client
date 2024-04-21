import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../components/User';

const Users = () => {
	const loaderUsers = useLoaderData();
	const [users, setUsers] = useState(loaderUsers);
	const handleDelete = (id) => {
		fetch(`http://localhost:3000/users/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
                if (data.deletedCount === 1) {
                    alert("User has beeb deleted succesfully!")
					const updatedUser = users.filter((user) => user._id != id);
					setUsers(updatedUser);
				}
			});

		
	};
	return (
		<div>
			<div className='grid grid-cols-3'>
				{users.map((user) => (
					<User
						handleDelete={handleDelete}
						key={user._id}
						user={user}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
