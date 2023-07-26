import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/login";

const App = () => {
  const [usuario, setUsuario] = useState("");

  const router = createBrowserRouter([
    { path: "/", element: <Login setUsuario={setUsuario} usuario={usuario} /> },
    { path: "/chat", element: <Chat /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
