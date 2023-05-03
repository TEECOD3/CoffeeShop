import Home from "./Pages/Home";
import { useEffect } from "react";
import Coffeedetail from "./Pages/Menu/subpages/Coffeedetail";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayer from "./Layout/RootLayer";
import Menu from "./Pages/Menu";
import Blog from "./Pages/Blog/Blog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="menu/:id" element={<Coffeedetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="blog" element={<Blog />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
