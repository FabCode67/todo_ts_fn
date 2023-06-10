import axios from "axios";
import Student from "../Student";
const baseUrl = "https://weak-puce-cockatoo-cape.cyclic.app";
export const fetchStudents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/todos`);
      return response.data.todos;
    } catch (error) {
      console.error("Error fetching students:", error);
      return []; 
    }
  };
  
export const removeStudent = async (id: string) => {
    try {
      const response = await axios.delete(`${baseUrl}/delete-todo/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error removing student:", error);
    }
  }

export const addStudent = async (student: any) => {
    try {
      const response = await axios.post(`${baseUrl}/add-todo`, student);
      return response.data;
    } catch (error) {
      console.error("Error adding student:", error);
    }
  }

export const updateStudent = async (id: string, student:any) => {
  try {
    const response = await axios.put(`${baseUrl}/edit-todo/${id}`, student);
    return response.data;
  }catch (error) {
    console.error("Error updating student:", error);
  }
}

export const fetchStudent = async (id: string) => {
  try {
    const response = await axios.get(`${baseUrl}/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching student:", error);
    return [];
  }
}