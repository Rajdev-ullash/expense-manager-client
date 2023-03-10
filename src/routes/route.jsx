import { getToken } from "../helper/LocalStorageHelper";
import CreateCategoryPage from "../pages/CreateCategoryPage";
import CreateTransactionPage from "../pages/CreateTransactionPage";
import ForgetPasswordPage from "../pages/ForgetPasswordPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ShowCategoryPage from "../pages/ShowCategoryPage";
import ShowTransactionPage from "../pages/ShowTransactionPage";
import UserPage from "../pages/UserPage";
import VerifyEmailPage from "../pages/VerifyEmailPage";
import VerifyOtpPage from "../pages/VerifyOtpPage";

const { createBrowserRouter, Navigate } = require("react-router-dom");

let token = getToken("token");

export const router = createBrowserRouter([
  {
    path: "/login",
    element: !token ? <LoginPage /> : <LoginPage />,
  },
  {
    path: "/register",
    element: !token ? <RegisterPage /> : <RegisterPage />,
  },
  {
    path: "/verify-email/:token",
    element: !token ? <VerifyEmailPage /> : <VerifyEmailPage />,
  },
  {
    path: "/forget-password",
    element: !token ? <ForgetPasswordPage /> : <ForgetPasswordPage />,
  },
  {
    path: "/verify-otp",
    element: !token ? <VerifyOtpPage /> : <VerifyOtpPage />,
  },
  {
    path: "/reset-password",
    element: !token ? <ResetPasswordPage /> : <ResetPasswordPage />,
  },
  /* private routes if token */
  {
    path: "/",
    element: token ? <HomePage /> : <Navigate to="/login" replace />,
  },
  {
    path: "/home",
    element: token ? <HomePage /> : <Navigate to="/login" replace />,
  },
  {
    path: "/user",
    element: token ? <UserPage /> : <Navigate to="/login" replace />,
  },
  {
    path: "/create-category",
    element: token ? <CreateCategoryPage /> : <Navigate to="/login" replace />,
  },
  {
    path: "/show-category",
    element: token ? <ShowCategoryPage /> : <Navigate to="/login" replace />,
  },
  {
    path: "/create-transaction",
    element: token ? (
      <CreateTransactionPage />
    ) : (
      <Navigate to="/login" replace />
    ),
  },
  {
    path: "/show-transaction",
    element: token ? <ShowTransactionPage /> : <Navigate to="/login" replace />,
  },
]);
