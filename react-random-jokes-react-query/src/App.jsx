import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import Joke from "./Joke";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Joke />
    </QueryClientProvider>
  );
}

export default App;
