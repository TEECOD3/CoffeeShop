import Home from "./Pages/Home";
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
import Cartpage from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Signup";
import Forgotpassword from "./Pages/Forgetpassword";
import Checkoutpage from "./Pages/Checkoutpage";
import Coffeedescription from "../src/Pages/Menu/subpages/Coffeedescription";
import Coffeereviews from "./Pages/Menu/subpages/Coffeereviews";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayer />}>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="login" element={<Login />} />
      <Route path="Register" element={<Register />} />
      <Route path="forgotpassword" element={<Forgotpassword />} />
      <Route path="Checkoutpage" element={<Checkoutpage />} />
      <Route path="menu/:id" element={<Coffeedetail />}>
        <Route index element={<Coffeedescription />} />
        <Route path="reviews" element={<Coffeereviews />} />
      </Route>
      <Route path="cart" element={<Cartpage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
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
