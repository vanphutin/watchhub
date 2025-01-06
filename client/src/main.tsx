import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routers/index.router.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ToggleMenuProvider } from "./context/menuToggle/index.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ToggleMenuProvider>
          <RouterProvider router={router}></RouterProvider>
        </ToggleMenuProvider>
      </Provider>
    </I18nextProvider>
  </StrictMode>
);
