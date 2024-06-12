import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { getAuthUser } from "../data/redux/selectors";

interface OpenRouteProps {}

const OpenRoute: React.FC<OpenRouteProps> = () => {
  const location = useLocation();
  const authUser = useSelector(getAuthUser);

  return isEmpty(authUser.email) ? (
    <Outlet />
  ) : (
    <Navigate to="/chat" replace state={{ from: location }} />
  );
};

export default OpenRoute;
