import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import SharedLayOut from "./components/SharedLayOut";
import { Header } from "./components/Header";
import { StartGame } from "./pages/StartGame";
export function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "startgame",
          element: <StartGame />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
