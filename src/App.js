import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import HomePage from "./pages/HomePage";
import WholeSalersScreen from "./components/WholeSalersScreen";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/wholesaler" element={<WholeSalersScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
