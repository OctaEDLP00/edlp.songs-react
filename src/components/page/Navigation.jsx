import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import Avatar from '../custom/Avatar'

export default function Navbar() {

  const { user, logOut } = useAuth()
  // console.log({ user })
  const handleLogout = async () => {
    try {
      await logOut()
    } catch (err) {
      console.error(err.message)
    }
  }

  {
    /* <img
        src="https://www.estudiantesdelaplata.com/wp-content/themes/edelp_v2/imgs/logo_edelp.svg"
        className="logo"
        alt="Logo"
      />
    */
  }

  return (
    <nav className="flex h-14 sticky justify-center items-center px-4 py-8 min-w-[650px] w-full m-auto z-20 top-4 rounded-lg">
      <header className="relative -left-60 uppercase ">
        <Link className="" to="/">
          <h1 className="">edelp songs</h1>
        </Link>
      </header>
      <div className="">
        <Avatar img={user.photoURL} />
        <span className="name">{user.displayName ?? user.email}</span>
        <div>
          <Link to="/login" onClick={handleLogout} className="">
            Logout
          </Link>
          <Link to="/profile" className="">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}
