import CreateCategoryPage from "../pages/CreateCategoryPage";
import CreateTransactionPage from "../pages/CreateTransactionPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShowCategoryPage from "../pages/ShowCategoryPage";
import ShowTransactionPage from "../pages/ShowTransactionPage";
import UserPage from "../pages/UserPage";
import VerifyEmailPage from "../pages/VerifyEmailPage";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/create-category",
    element: <CreateCategoryPage />,
  },
  {
    path: "/show-category",
    element: <ShowCategoryPage />,
  },
  {
    path: "/create-transaction",
    element: <CreateTransactionPage />,
  },
  {
    path: "/show-transaction",
    element: <ShowTransactionPage />,
  },
  {
    path: "/verify-email/:token",
    element: <VerifyEmailPage />,
  },
]);
