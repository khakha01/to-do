import "./App.css";
import { Route, Routes } from "react-router-dom";
import ToDoPage from "./app/pages/to-do/index.tsx";
import { Toaster } from "sonner";
import HomePage from "./app/pages/home/index.tsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/to-do" element={<ToDoPage />} />
      </Routes>
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
