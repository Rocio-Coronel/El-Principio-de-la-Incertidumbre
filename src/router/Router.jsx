import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ArcaneGrid from "../pages/ArcaneGrid";
import ArcaneDetail from "../pages/ArcaneDetail";


const routerPrincipio = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cards", element: <ArcaneGrid /> },
      { path: "/detail/:id", element: <ArcaneDetail /> },
    ],
  },
]);

export default routerPrincipio;