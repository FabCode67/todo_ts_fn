import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {fetchStudents} from "./api/api"
import { removeStudent } from "./api/api";
import { clearStudent } from "./api/api";

interface ITodo {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    age: number;
    status: boolean;
}
const Student: React.FC = () => {
    const [students, setStudents] = useState<ITodo[]>([]);

    useEffect(() => {
        const fetchStudentData = async () => {
           const studentData =  await fetchStudents();
              setStudents(studentData);
        };
        fetchStudentData();
    }, []);

    const handleRemoveTodo = async (id:string) => {
        const newStudents = students.filter((student) => student._id !== id);
        setStudents(newStudents);
        await removeStudent(id);
    };

    const handlePassIdinParams = (id:string) => {
       navigate(`/edit-todo/${id}`)
    }

    const handleClear = async () => {
        const newStudents = students.filter((student) => student.status !== true);
        setStudents(newStudents);
        await clearStudent();
    };


    const navigate = useNavigate();

    const handleNavigateToAddStudent = () => {
        navigate("/add");
    };
 
    return (
        <div>
            <table className="w-full h-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attended</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>

                {students.map((student, index) => (
                    <tbody className="bg-white divide-y divide-gray-200" key={student._id}>
                        <tr className={`${student.status === false ? 'line-through':''}`}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index+1}</td> 
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.firstname}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.lastname}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.age}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.status ? "true" : "false"}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-o px-1 text-2xl rounded" onClick={()=>handlePassIdinParams(student._id)}><AiFillEdit /></button>  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-o px-1 text-2xl rounded" onClick={()=>handleRemoveTodo(student._id)}><CiTrash /></button> </td>
                        </tr>
                    </tbody>
                ))}

            </table>
            <div className="flex justify-center space-x-20">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleNavigateToAddStudent()}>Add Student</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleClear()}>Clear Student</button>
                </div>
        </div>
    );
};

export default Student;
