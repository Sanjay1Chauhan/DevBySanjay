import RootLayout from "@/layout/root";
import HomeTwo from "@/pages/home-2";
import { createBrowserRouter } from "react-router-dom";

// basename MUST match the Vite `base` (/DevBySanjay/) and the GitHub Pages subpath.
// Without this, React Router would try to render route "/" at the root URL and
// the app would show a blank page / 404 on https://sanjay1chauhan.github.io/DevBySanjay/
export const router = createBrowserRouter(
  [
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
  ],
  { basename: "/DevBySanjay" }
);