import "./App.css";
import Header from "./components/header/header";
import LogInForm from "./components/login/login";
import MainList from "./components/mainList/mainList";
import RegisterForm from "./components/register/RegisterForm";
import useUser from "./hooks/useUser";

function App() {
  const { user } = useUser();

  return (
    <div className="App">
      <Header />
      <LogInForm />
      {user.isAuthenticated ? <MainList /> : ""}

      <RegisterForm />
    </div>
  );
}

export default App;
