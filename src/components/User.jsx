import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user, handleDelete }) => {
    const {_id, name, email } = user;
	return (
		<div className='card bg-base-100 shadow-xl'>
			<div className='p-8 flex items-center gap-3'>
				<h2 className='card-title'>{name}</h2>
                <p>{email}</p>
                <div className='inline-flex gap-2'>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-sm btn-warning'>Delete</button>
                    <Link to={`/update/${_id}`} className='btn btn-sm btn-info'>Update</Link>
				</div>
			</div>
		</div>
	);
};

export default User;
