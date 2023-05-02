import Home from "./Pages/Home";
import { useEffect } from "react";
import Coffeedetail from "./Pages/Menu/subpages/Coffeedetail";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayer from "./Layout/RootLayer";
import Menu from "./Pages/Menu";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />}></Route>
      <Route path="menu" element={<Menu />} />
      <Route path="menu/:id" element={<Coffeedetail />} />
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
