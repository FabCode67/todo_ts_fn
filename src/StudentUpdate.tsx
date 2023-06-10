import React from 'react'
import { useParams } from 'react-router-dom'
import { updateStudent } from './api/api'
import { fetchStudent } from './api/api'

interface Student {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  age: number;
  status: boolean;
}

const StudentUpdate: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [student, setStudent] = React.useState<Student | null>(null)

  React.useEffect(() => {
    const getStudent = async () => {
      const studentFromServer = await fetchStudent(id as string)
      setStudent(studentFromServer.todo)
      console.log(studentFromServer);
      
    }
    getStudent()
  }, [id])

  const handleUpdate = async (id:string, student:any) => {
    await updateStudent(id, student)    
  }
  return (
    <div className="flex w-full content-center items-center justify-center h-screen bg-gray-200">
      <h1>Student Update</h1>
      {student && (
        <div className="max-w-md mx-auto">
          <form>
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2 w-full" htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstName"
                value={student.firstname}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) =>
                  setStudent({ ...student, firstname: e.target.value })
                }
              />
            </div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={student.lastname}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setStudent({ ...student, lastname: e.target.value })
              }
            />
            <label>Email</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              value={student.email}
              onChange={(e) =>
                setStudent({ ...student, email: e.target.value })
              }
            />
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={student.age}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) =>
                setStudent({ ...student, age: e.target.value })
              }
            />
            <label>Status</label>
            <select
              name="status"
              value={student.status}
              onChange={(e) =>
                setStudent({ ...student, status: e.target.value === 'true' })
              }
              className="w-full py-2 px-3"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>

            <button type='submit' onClick={() => handleUpdate}>Update Student</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default StudentUpdate
