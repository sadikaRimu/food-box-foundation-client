import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setloginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    // if (token) {
    //     navigate(from, { replace: true });
    // }
    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setloginUserEmail(data.email);
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoginError(err.message);
            })
    }
    return (
      <div>
        <div className="flex justify-center md:mt-20">
          <div className="w-96 p-7 border-2 border-gray-300 shadow-xl py-10">
            <h2 className="text-xl text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: "email is required" })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password must be 6 charecters or longer",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <button
                className="btn btn-primary w-full text-white mt-5"
                type="submit"
              >
                Login
              </button>
              <div>
                {loginError && <p className="text-red-600">{loginError}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;