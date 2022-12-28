import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const auth = useAuth();
  return <h1>Home Pages {JSON.stringify(auth, null, 4)}</h1>;
};

export default Home;
