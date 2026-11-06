import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./components/index";
import NetworkPage from "./components/network";
import StudentPage from "./components/student/index";
import ProfilePage from "./components/tutoring";
import SignIn from "./components/sign";
import Tutoring from "./components/tutoring";
import { AuthProvider } from "./contexts/AuthContext";
// import SearchResults from "./mock-data/searchResults";
/*
postgresql 
userid:postgres
password
admin123*/
function App() {
    const [message, setMessage] = useState();
  // const [error, setError] = useState(null);

   useEffect(() => {
        // Requesting data from the FastAPI server port
    fetch('http://localhost:8000/api/data')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
      // if (!query.trim(){
      //   SearchResults([]);
      //   return;
      // })
  }, []);


  const api_base_url = ' http://localhost:8000/api/v1/';
  console.log('api base url',api_base_url);
  return(

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Main app pages */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/tutoring" element={<Tutoring />} />
            <Route path="/student/:id" element={<StudentPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          {/* Auth pages */}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
          </Route>

          {/* Fallback: redirect unknown routes to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
