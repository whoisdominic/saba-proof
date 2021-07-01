import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppModel from "../store";
import { Provider } from "react-redux";
import { create } from "../saba/src/index";

/**
 * Redux Models
 */
const options = {
  initialState: {},
  // All of our models go in the array below
  models: [AppModel],
  onError(e: any) {
    console.log("====================================");
    console.error(e);
    console.log("====================================");
  },
};

/**
 * DVA (ie REDUX) setup below
 */
const app = create(options);
// register models
options.models.forEach((model) => app.model(model));

app.start();
const store: any = app._store;
app.getStore = () => store;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
