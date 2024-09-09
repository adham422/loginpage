import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import Container from "react-bootstrap/Container";
import Home from "./component/Home";
import AppLayout from "./component/AppLayout";

function App() {
  return (
    <Container className="APP">
      <Routes>
      <Route  path="/" element={<AppLayout><Home/></AppLayout>} ></Route>
      <Route index path="/login" element={<Login />} ></Route>
        
      </Routes>
    </Container>
  );
}

export default App;
