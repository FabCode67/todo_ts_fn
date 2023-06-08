import axios, { AxiosResponse } from 'axios';

const baseUrl = "https://weak-puce-cockatoo-cape.cyclic.app"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/todos"
        )
        return todos
    } catch (error) {
        throw new Error(error as string)
    }
}


export const addTodo = async (
    formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<ITodo, "_id"> = {
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            password: formData.password,
            age: formData.age,
            status: formData.status,
        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/add-todo",
            todo
        )
        return saveTodo
    } catch (error) {
        throw new Error(error as string)
    }
}

export const updateTodo = async (
    todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<ITodo, "status"> = {
            status: true
        }
        const uptadedTodo: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/edit-todo/${todo._id}`,
            todoUpdate
        )
        return uptadedTodo
    } catch (error) {
        throw new Error(error as string)
    }
}

export const deleteTodo = async (
    _id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/delete-todo/${_id}`
        )
        return deletedTodo
    } catch (error) {
        throw new Error(error as string)
    }
}

export const getTodo = async (
    _id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: AxiosResponse<ApiDataType> = await axios.get(
            `${baseUrl}/todo/${_id}`
        )
        return todo
    } catch (error) {
        throw new Error(error as string)
    }
}
