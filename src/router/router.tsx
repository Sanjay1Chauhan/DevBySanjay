import RootLayout from "@/layout/root";
import HomeTwo from "@/pages/home-2";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomeTwo />,
      },
    ],
  },
]);