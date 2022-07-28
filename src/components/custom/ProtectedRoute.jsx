import Spinner from './Spinner'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="flex justify-center align-center h-full">
    <Spinner />
  </div>
  
  if (!user) return <Navigate to="/login" />

  return <>{children}</>
}
