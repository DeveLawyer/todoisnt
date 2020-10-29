import "./styles/global.css";
import logo from "./images/logo.png";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <img src={logo} alt="logo" />
    </Layout>
  );
}

export default App;
