import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { selectLoggedstate } from "./Store/Slices/AuthSlice";
import RootLayer from "./Layout/RootLayer";
import Menu from "./Pages/Menu";
import Cartpage from "./Pages/Cart";
import Register from "./Pages/Register";
import Forgotpassword from "./Pages/Forgetpassword";
import Checkoutpage from "./Pages/Checkoutpage";
import Protected from "./Lib/Protect";
import { Heroskeleton } from "./Pages/Home/Sections/herosection";
import LoadingModal from "./Components/UI/LoadingModal";

// Import your components using lazy-loading
const Home = lazy(() => import("./Pages/Home"));
const Coffeedetail = lazy(() => import("./Pages/Menu/subpages/Coffeedetail"));
const Login = lazy(() => import("./Pages/Login"));
const Coffeedescription = lazy(
  () => import("../src/Pages/Menu/subpages/Coffeedescription")
);
const Coffeereviews = lazy(() => import("./Pages/Menu/subpages/Coffeereviews"));

function App() {
  const isloggedin = useSelector(selectLoggedstate);

  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <LoadingModal text="loading" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<RootLayer />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotpassword" element={<Forgotpassword />} />

            <Route
              path="checkoutpage"
              element={
                <Protected>
                  <Checkoutpage />
                </Protected>
              }
            />

            <Route path="menu/:id" element={<Coffeedetail />}>
              <Route index element={<Coffeedescription />} />
              <Route path="reviews" element={<Coffeereviews />} />
            </Route>

            <Route path="cart" element={<Cartpage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
