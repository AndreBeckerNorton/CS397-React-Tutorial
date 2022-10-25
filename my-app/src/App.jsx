import CourseList from "./components/CourseList";
import Banner from "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useDbData } from "./utilities/firebase";
import Dispatcher from "./components/Dispatcher";

const Main = () => {
  const [data, error] = useDbData('/');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (!data) return <h1>No user data found</h1>;

  return (
    <div className="app">
      <Banner title={data.title}/>
      <Dispatcher courses={data.courses}/>
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main/>
    </div>
  </QueryClientProvider>
);

export default App;