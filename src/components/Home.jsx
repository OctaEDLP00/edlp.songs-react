import useAuth from './../hooks/useAuth'
import Navbar from './page/Navigation'
import Main from './page/Main'
import Foot from './page/Foot'
import Spinner from './custom/Spinner'

export default function Home() {
  const { loading } = useAuth()

  if (loading) return <div className="flex justify-center align-center h-full">
    <Spinner />
  </div>

  return <>
    <Navbar />
    <Main />
    <Foot />
  </>

}
