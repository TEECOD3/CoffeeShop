import Home from "./Pages/Home";
import Navbar from "./Layout/Navbar";
import Loader from "./Components/UI/Loader";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayer from "./Layout/RootLayer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />}></Route>
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
