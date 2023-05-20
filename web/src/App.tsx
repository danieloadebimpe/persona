import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connectWallet, routeNames, routes, useAppDispatch } from "application";
import { AppLayout } from "ui/base";

function App() {
  const dispatch = useAppDispatch();
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={route.path + "---" + index}
              element={
                <AppLayout
                  sidebarRoutes={routeNames}
                  headerProps={{
                    onConnect(wallet) {
                      dispatch(connectWallet(wallet));
                      
                    },
                  }}
                >
                  <Suspense>
                    <route.Component />
                  </Suspense>
                </AppLayout>
              }
              path={route.path}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
