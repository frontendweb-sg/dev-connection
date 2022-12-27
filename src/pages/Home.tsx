import { useAuth } from "../context/Auth";

const Home = () => {
  const auth = useAuth();
  return <h1>Home Pages {JSON.stringify(auth, null, 4)}</h1>;
};

export default Home;
