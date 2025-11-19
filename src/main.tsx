import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToDoPage from './app/pages/to-do/index.tsx'

createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/to-do" element={<ToDoPage/>}/>
    </Routes>
    </BrowserRouter>
   </React.StrictMode>
)
