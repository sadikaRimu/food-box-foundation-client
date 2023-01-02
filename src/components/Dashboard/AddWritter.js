import React from 'react';
import { useForm } from 'react-hook-form';

const AddWritter = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl font-bold'>Add A Writter</h2>
            <form onSubmit={handleSubmit()}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text'
                        {...register('name', {
                            required: 'name is required'
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='text'
                        {...register('email', {
                            required: 'email is required'
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">

                        {/* {
                            specialties.map(special => <option
                                key={special._id}
                                value={special.name}
                            >{special.name}</option>)
                        } */}


                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type='file'
                        {...register('image', {
                            required: 'Photo is required'
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-primary w-full text-white mt-6' value='Add writter' type="submit" />

            </form>
        </div>
    );
};

export default AddWritter;