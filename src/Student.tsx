import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiTrash } from "react-icons/ci";
import { AiFillEdit } from "react-icons/ai";

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
        const fetchStudents = async () => {
            try {
                const response = await axios.get("https://weak-puce-cockatoo-cape.cyclic.app/todos");
                setStudents(response.data.todos);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchStudents();
    }, []);
    const handleRemoveTodo = async (id:string) => {
        console.log(id, "===");

        try{
         const response = await axios.delete(`https://weak-puce-cockatoo-cape.cyclic.app/delete-todo/${id}`);
         
        }catch(error){
            console.error("Error deleting student:", error);
        }
    };

    return (
        <div>
            <table className="w-full h-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attended</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>

                {students.map((student) => (
                    <tbody className="bg-white divide-y divide-gray-200" key={student._id}>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.firstname}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.lastname}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.age}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.status ? "true" : "false"}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-o px-1 text-2xl rounded"><AiFillEdit /></button>  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-o px-1 text-2xl rounded" onClick={()=>handleRemoveTodo(student._id)}><CiTrash /></button> </td>
                        </tr>
                    </tbody>
                ))}

            </table>
            
        </div>
    );
};

export default Student;
