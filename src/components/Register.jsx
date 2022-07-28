import { useState } from "react"
import useAuth from '../hooks/useAuth'
import Alert from "./custom/Alert"
import { Link, useNavigate } from 'react-router-dom'
import Button from './custom/Button'

export default function Register() {
  const {
    signUp,
    signInWithGoogle,
    signInWithTwitter
  } = useAuth()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogle()
      navigate("/");
    } catch (err) {
      // console.error(err.code)
      setError(err.message)
    }
  }
  
  const handleTwitterSignin = async () => {
    try {
      await signInWithTwitter()
      navigate("/");
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSubmit = async (e) => {
    setError('')
    try { 
      await signUp(user.email, user.password)
      navigate('/')
    } catch (err) {
      setError(err.code)
    }
  }

  return (
    <div className="">
      {error && <Alert message={error} />}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <h5 className="">
            Edelp Songs | SignUp
          </h5>
          <div>
            <label
              htmlFor="email"
              className=""
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=""
              placeholder="name@company.com"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className=""
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className=""
              placeholder="Password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <Button
            type="submit"
            className=""
          >
            Register
          </Button>
        </form>
        <p className="">
          Already have an Account?
          <Link to="/login" className="">
            Login
          </Link>
        </p>
        <div>
          <Button
            onClick={handleGoogleSignin}
            className=""
          >
            Signin Google
          </Button>
          <Button
            onClick={handleTwitterSignin}
            className=""
          >
            Signin Twitter
          </Button>
        </div>
      </div>
    </div>
  );
}