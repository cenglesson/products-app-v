import React from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "route/routes";
import { store } from "state/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
