import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./Routes/Bag.jsx";
import Home from "./Routes/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import myntraStore from "./Store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: postLoder*/ },
      {
        path: "/bag",
        element: <Bag />,
        // action: createPostAction,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
