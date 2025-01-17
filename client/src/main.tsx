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
import LanguageProvider from "./context/languageContext/index.tsx";
import MovieProvider from "./context/movieContext/index.tsx";
import { MovieGenresProvider } from "./context/movieGenres/index.tsx";
import { MovieContextProvider } from "./context/episodeContext/index.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <MovieProvider>
          <MovieContextProvider>
            <MovieGenresProvider>
              <ToggleMenuProvider>
                <RouterProvider router={router}></RouterProvider>
              </ToggleMenuProvider>
            </MovieGenresProvider>
          </MovieContextProvider>
        </MovieProvider>
      </LanguageProvider>
    </I18nextProvider>
  </Provider>
  // </StrictMode>
);
