import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import SignupPage from "./pages/SignupPage";

import ComplaintPage from "./pages/ComplaintPage";

import AIPage from "./pages/AIPage";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/signup"
          element={<SignupPage />}
        />

        <Route

          path="/complaints"

          element={

            <ProtectedRoute>

              <ComplaintPage />

            </ProtectedRoute>

          }

        />

        <Route

          path="/ai"

          element={

            <ProtectedRoute>

              <AIPage />

            </ProtectedRoute>

          }

        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;