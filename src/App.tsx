import { Route, Switch } from "react-router-dom";
import "./App.css";
import Favorites from "./components/Favorites";
import { QueryClient, QueryClientProvider } from "react-query";
import Cats from "./components/Cats";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LocalStorage from "./components/LocalStorage";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

function App() {
  return (
    <div className="App">
      <Header />
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cats">
            <Cats />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/localstorage">
            <LocalStorage />
          </Route>
        </Switch>
      </QueryClientProvider>
      <Footer />
    </div>
  );
}

export default App;
