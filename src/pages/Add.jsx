import React from 'react';

const Add = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const user = { name, email };
		// console.log('user from client side', user);
		fetch('http://localhost:3000/user', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    // console.log(data);
                    alert("User added successfully!")
                    form.reset();
                }
            });
	};
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Add now!</h1>
					<p className='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
				</div>
				<div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form
						className='card-body'
						onSubmit={handleSubmit}>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Name</span>
							</label>
							<input
								type='text'
								placeholder='name'
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
								placeholder='email'
								className='input input-bordered'
								required
							/>
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Add new</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Add;
