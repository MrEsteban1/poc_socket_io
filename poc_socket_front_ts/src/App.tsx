import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import DialogComponentPatter from "./components/views/DialogComponentPatter";
import MensajeChatsScreen from "./components/views/MensajeChatsScreen";
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [usuario, setUsuario] = useState("");

  const router = createBrowserRouter([
    { path: "/", element: <Login setUsuario={setUsuario} usuario={usuario} /> },
    { path: "/chat", element: <Chat usuario={usuario} /> },
    {path: "/mensaje", element:<MensajeChatsScreen/>}
  ]);

  return (
    <div className="App">
      <header></header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
