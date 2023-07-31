import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [usuario, setUsuario] = useState("");

  const router = createBrowserRouter([
    { path: "/", element: <Login setUsuario={setUsuario} usuario={usuario} /> },
    { path: "/chat", element: <Chat usuario={usuario} /> },
  ]);

  return (
    <div className="App">
      <header></header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
