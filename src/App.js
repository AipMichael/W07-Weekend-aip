import "./App.css";
import Header from "./components/header/header";
import LogInForm from "./components/login/login";
import MainList from "./components/mainList/mainList";
import RegisterForm from "./components/register/RegisterForm";

function App() {
  return (
    <div className="App">
      <Header />
      <LogInForm />
      <MainList />
      <RegisterForm />
    </div>
  );
}

export default App;
