import { useSelector } from "@/redux/store";
import { Navigate, Outlet } from "react-router-dom";

const GuestGuard = () => {
  // get the me state from auth.slice.ts and check if me present or not
  // if me is present then redirect to homepage as already loggedIn.

  const me = useSelector((state) => state.auth.me);

  if (me) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default GuestGuard;
