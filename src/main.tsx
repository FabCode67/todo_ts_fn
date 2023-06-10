import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StudentForm from './StudentForm.tsx';
import StudentUpdate from './StudentUpdate.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/add" element={<StudentForm />} />
      </Routes>
      <Routes>
        <Route path="/edit-todo/:id" element={<StudentUpdate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
