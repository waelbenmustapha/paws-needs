import "./App.css";
import AppContext from "./Context/AppContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {QueryClientProvider,QueryClient} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  sidebarRoutes,
  authRoutes,
  dashboardRoutes,
  usersRoutes,
} from "./utils/Routes";
import Dashboard from "./screens/dashboardScreens/Dashboard";
import { AuthProvider } from "./Context/AuthContext";
import { RequireAuth } from "./components/auth/RequireAuth";
import { DeniedToAuthUsers } from "./components/auth/DeniedToAuthUsers";
import Home from "./screens/dashboardScreens/Home";
import RequireAdmin from "./components/auth/RequireAdmin";
import HomePage from "./screens/usersScreens/HomePage";
import UserPannel from "./screens/usersScreens/UserPannel";
import RequireUser from "./components/auth/RequireUsers";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {


  const queryClient = new QueryClient()

  const getUsersRoutes = () => {
    return usersRoutes.map((route) => {
      return (
        <Route key={route.path} path={route.path} element={route.component} />
      );
    });
  };
  const getDashboardRoutes = () => {
    return dashboardRoutes.map((route) => {
      return (
        <Route key={route.path} path={route.path} element={route.component} />
      );
    });
  };

  const getSidebarRoutes = () => {
    return sidebarRoutes.map((route) => {
      return (
        <Route key={route.path} path={route.path} element={route.component} />
      );
    });
  };
  const getRoutes = () => {
    return authRoutes.map((route) => {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<DeniedToAuthUsers>{route.component}</DeniedToAuthUsers>}
        />
      );
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppContext>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route
              path={"home"}
              element={
                <RequireAuth>
                  <RequireUser>
                    <HomePage />
                  </RequireUser>
                </RequireAuth>
              }
            >
              <Route index element={<UserPannel />} />
              {getUsersRoutes()}
            </Route>
            {getRoutes()}
            <Route
              path="*"
              element={<Navigate to="dashboard/home" replace />}
            />
            <Route
              path={"dashboard"}
              element={
                <RequireAuth>
                  <RequireAdmin>
                    <Dashboard />
                  </RequireAdmin>
                </RequireAuth>
              }
            >
              <Route index element={<Home />} />
              {getDashboardRoutes()}
              {getSidebarRoutes()}
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext>
    </AuthProvider>
    <ReactQueryDevtools initialIsOpen />

    </QueryClientProvider>

  );
}

export default App;
