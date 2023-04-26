import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import RouterPage from "./pages/RouterPage";
import OrderPage from "./pages/OrderPage";
import CookPage from "./pages/CookPage";
import BillingPage from "./pages/BillingPage";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoutes from "./components/ProtectedRoutes";
import EmployeePage from "./pages/EmployeePage";
import FoodItem from "./pages/FoodItem";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import RollBasedProtectRoutes from "./components/RollBasedProtectRoutes";

export const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="rms" element={<RouterPage />}>
              <Route element={<RollBasedProtectRoutes alloweRole={"Admin"} />}>
                <Route path="home" element={<HomePage />} />
                <Route path="employee" element={<EmployeePage />} />
                <Route path="fooditem" element={<FoodItem />} />
              </Route>
              <Route element={<RollBasedProtectRoutes alloweRole={"Waiter"} />}>
                <Route path="order" element={<OrderPage />} />
              </Route>
              <Route element={<RollBasedProtectRoutes alloweRole={"Cook"} />}>
                <Route path="cook" element={<CookPage />} />
              </Route>
              <Route
                element={<RollBasedProtectRoutes alloweRole={"Cashier"} />}
              >
                <Route path="billing" element={<BillingPage />} />
              </Route>
              <Route path="unauthorized" element={<UnauthorizedPage />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
