import "./App.css";
import UserList from "./components/UserList";
import Auth from "./components/Auth";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Full-Stack App</h1>
        {token ? <UserList /> : <Auth />}
      </header>
    </div>
  );
}

export default App;
