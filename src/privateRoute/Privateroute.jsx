import { Navigate, useLocation } from "react-router-dom";

const Privateoute = ({ children }) => {
  const isLoggedIn = true; // later: AuthContext

  const location = useLocation();
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default Privateoute;
