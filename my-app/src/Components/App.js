import Login from "./Login";
import ContactsPage from "./ContactsPage";
import SignUp from "./SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/HomePage"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/ErrorPage" element={<ErrorPage />} />
          <Route path="/ContactsPage" element={<ContactsPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
