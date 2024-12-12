import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login as authLogin } from '../store/authSlice';
import authService from '../services/authService';
import { Logo } from '../assets/images';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      setErrorMessage('');
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage(error?.response?.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-24 w-auto"
            src={Logo}
            alt="Riyazul Jannah"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-lime-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="appearance-none rounded-t-xl relative block w-full p-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="appearance-none rounded-b-xl relative block w-full p-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-lime-500 focus:border-lime-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center p-4 border border-transparent text-sm font-medium rounded-xl text-white bg-lime-600 hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link
            to="/signup"
            className="font-medium text-lime-600 hover:text-lime-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;