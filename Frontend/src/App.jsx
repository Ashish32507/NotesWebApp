import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import AddNotes from "./assets/component/AddNotes";
import Navbar from "./assets/component/Navbar";
import NotesCard from "./assets/component/NotesCard";
import Login from "./assets/component/Login";

function App() {
  const [notes, setNotes] = useState([]);
  const [userId, setUserId] = useState(null);
  const getAllData = async () => {
    if (userId) {
      const response = await axios.get(
        `http://localhost:4000/notes/getnotes/${userId}`
      );
      console.log(response.response);
      setNotes(response.data.response);
    }
  };
  useEffect(() => {
    getAllData();
  }, [userId]);

  const handleEdit = (id) => {
    console.log("Edit note with id:", id);
    // Implement edit functionality here
  };

  const handleDelete = (id) => {
    console.log("Delete note with id:", id);
    // Implement delete functionality here
  };

  const handleLogin = (id) => {
    setUserId(id);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={userId ? "/home" : "/login"} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/home"
          element={
            userId ? (
              <>
                <Navbar />
                <AddNotes userId={userId} getAllData={getAllData} />
                <div className="mt-10 px-10 flex justify-center items-center pb-10 gap-5 flex-wrap">
                  {notes.map((note) => (
                    <NotesCard note={note} />
                  ))}
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
