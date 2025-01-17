import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./Components/App/App";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Store/Store/Store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />;
    </PersistGate>
  </Provider>,
);
