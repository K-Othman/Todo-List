// import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/Signup/Signup";

function App() {
  const routes = (
    <Routes>
      <Route element={<Home />} path="/" />
      {/* <Route element={<Login />} path="/login" /> */}
      {/* <Route element={<Signup />} path="/signup" /> */}
    </Routes>
  );
  return (
    <>
      {/* <Header /> */}
      <main className="flex h-screen items-center justify-center">
        {routes}
      </main>
    </>
  );
}

export default App;
