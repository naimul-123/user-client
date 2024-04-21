import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
	const navigate = useNavigate();
	const user = useLoaderData();
	const { _id, name, email } = user;

	const handleUpdate = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const updatedUser = { name, email };
		fetch(`http://localhost:3000/users/${_id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'Application/json',
			},
			body: JSON.stringify(updatedUser),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount === 1) {
					alert('User information updated successfully!');
					form.reset();
					// navigate('/users')
				}
			});
	};
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Update user</h1>
					<p className='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form
						className='card-body'
						onSubmit={handleUpdate}>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								type='text'
								defaultValue={name}
								name='name'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
								name='email'
								defaultValue={email}
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Update;
