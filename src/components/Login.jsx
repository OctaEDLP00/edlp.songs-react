import { useState } from "react"
import useAuth from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import Alert from "./custom/Alert"
import Button from './custom/Button'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  
  const { signIn, signInWithTwitter, signInWithGoogle, resetPassword } = useAuth()
  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value })
  
  const handleSubmit = async (e) => {
    setError('')
    try { 
      await signIn(user.email, user.password)
      navigate('/')
    } catch (err) {
      setError(err.code)
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogle()
      navigate("/");
    } catch (err) {
      setError(err.message)
    }
  }

  //  

  const handleTwitterSignin = async () => {
    try {
      await signInWithTwitter()
      navigate('/')
    } catch (err) {
      if (err.code === 'auth/invalid-credential')
        setError('Invalid credential')
      setError(err.message)
    }
  }

  const handleResetPassword = async (e) => {
    //e.preventDefault();
    if (!user.email) return setError("Write an email to reset password")
    try {
      await resetPassword(user.email)
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <div
        className="
          p-4 max-w-sm bg-white rounded-lg
          border border-gray-200 shadow-md
          sm:p-6 lg:p-8 dark:bg-gray-800
          dark:border-gray-700
        "
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Edelp Songs | SignIn
          </h5>
          <div>
            <label
              htmlFor="email"
              className="
                block mb-2 text-sm font-medium
                text-gray-900 dark:text-gray-300
              "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="
                bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg 
                focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-600 
                dark:border-gray-500 dark:placeholder-gray-400 
                dark:text-white
              "
              placeholder="name@company.com"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="
                block mb-2 text-sm font-medium
                text-gray-900 dark:text-gray-300
              "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="
                bg-gray-50 border border-gray-300 
                text-gray-900 text-sm rounded-lg f
                ocus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-600 
                dark:border-gray-500 dark:placeholder-gray-400 
                dark:text-white
              "
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex items-start">
            <a
              href="#!"
              className="
                ml-auto text-sm text-blue-700 
                hover:underline dark:text-blue-500
              "
              onClick={handleResetPassword}
            >
              Lost Password?
            </a>
          </div>
          <Button
            type="submit"
            className="
            w-full text-white bg-blue-700
            hover:bg-blue-800 focus:ring-4 focus:outline-none
            focus:ring-blue-300 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          ">
            Login
          </Button>
        </form>
        <p className="my-4 text-sm flex justify-between px-3">
          Don't have an account?
          <Link to="/register" className="text-blue-700 hover:text-blue-900">
            Register
          </Link>
        </p>
        <div>
          <Button
            onClick={handleGoogleSignin}
            className="
              w-full
              text-base my-2 text-white bg-red-500
              hover:bg-red-400 focus:ring-4 focus:outline-none
              focus:ring-blue-500 font-medium rounded-lg
              px-2.5 py-3 text-center dark:bg-red-500
              dark:hover:bg-red-400 dark:focus:ring-blue-800
            "
          >
            Login Google
          </Button>
          <Button
            onClick={handleTwitterSignin}
            className="
              w-full
              text-base my-2 text-white bg-teal-500
              hover:bg-teal-400 focus:ring-4 focus:outline-none
              focus:ring-teal-500 font-medium rounded-lg
              px-2.5 py-3 text-center dark:bg-teal-500
              dark:hover:bg-teal-400 dark:focus:ring-teal-800
            "
            disabled
          >
            Login Twitter
          </Button>
        </div>
      </div>
    </div>
  )
}
