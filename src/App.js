import "./App.css";
import Header from "./components/header/header";
import LogInForm from "./components/login/login";
import MainList from "./components/mainList/mainList";

function App() {
  return (
    <div className="App">
      <Header />
      <LogInForm />
      <MainList />
    </div>
  );
}

export default App;
