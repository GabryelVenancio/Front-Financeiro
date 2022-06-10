import Navegation from "./components/header/Navegation";
import Container from "./components/main/Container";
import Login from "./components/user/Login";
import "./css/Styles.css";

function App() {
  return (
    <div>
      <Login />
      <Navegation />
      <Container />

    </div>
  );
}

export default App;
