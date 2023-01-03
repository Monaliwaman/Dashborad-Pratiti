import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import store from "./redux/store";
import Confirm from "./components/Common/confirm";
// import store from './store';

const app = (
  <Provider store={store}>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-left"
      getState={(state) => state.toastr} // This is the default
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
    <BrowserRouter>
      <App />
      <Confirm/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
