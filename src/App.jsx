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

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="rms" element={<RouterPage />}>
              <Route path="home" element={<HomePage />} />
              <Route path="order" element={<OrderPage />} />
              <Route path="cook" element={<CookPage />} />
              <Route path="billing" element={<BillingPage />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
