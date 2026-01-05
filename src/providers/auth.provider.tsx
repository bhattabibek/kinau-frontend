import { Navigate } from 'react-router-dom';
import { useSelector } from "@/redux/store";


const AuthGuard = ({children}:{children:React.ReactNode}) => {
  // get the me state from auth.slice.ts and check if me present or not
  // if !me is present then redirect to login page as user is not loggedIn else allow the requested page.

  const me = useSelector((state) => state.auth.me);

  if (!me) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>
};

export default AuthGuard;
