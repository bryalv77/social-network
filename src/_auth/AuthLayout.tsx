import { Outlet, Navigate } from "react-router-dom";

export const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/login" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img src="" />
        </>
      )}
    </>
  );
};

export default AuthLayout;
