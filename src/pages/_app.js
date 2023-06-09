import { Header } from "components/Header";
import AppContext from "context/AppContext";
import useInitialState from "hooks/useInitialState";
import "styles/globals.css";

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
