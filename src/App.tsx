import React from 'react'
import Student from './Student'
import StudentForm from './StudentForm'

const App: React.FC = () => {
  

  return (
    <main className='App'>
      <h1>My Todos</h1>
     <Student />
     <StudentForm />
    </main>
  )
}

export default App