interface ITodo {
    _id: string
    firstname: string
    lastname: string
    email: string
    password: string
    age: number
    status: boolean
    createdAt?: string
    updatedAt?: string
}

interface TodoProps {
    todo: ITodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
}