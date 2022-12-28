import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import Store from "./store";
import AuthProvider from "./context/Auth";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./lib/icons";
import "./index.scss";
import Loading from "./components/Loading";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
