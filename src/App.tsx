import { Route, Switch } from "react-router-dom";
import "./App.css";
import Favorites from "./components/Favorites";
import { QueryClient, QueryClientProvider } from "react-query";
import Cats from "./components/Cats";
import Header from "./components/Header";

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
          <Route path="/cats">
            <Cats />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </QueryClientProvider>
    </div>
  );
}

export default App;
