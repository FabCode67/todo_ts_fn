import React, { useState } from 'react'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor='firstname'>firstname</label>
          <input onChange={handleForm} type='text' id='firstname' />
        </div>
        <div>
          <label htmlFor='lastename'>lastename</label>
          <input onChange={handleForm} type='text' id='lastename' />
        </div>
        <div>
          <label htmlFor='email'>email</label>
          <input onChange={handleForm} type='email' id='email' />
        </div>
        <div>
          <label htmlFor='passward'>passward</label>
          <input onChange={handleForm} type='passward' id='passward' />
        </div>
        <div>
          <label htmlFor='name'>age</label>
          <input onChange={handleForm} type='number' id='age' />
        </div>
        <div>
          <label htmlFor='status'>status</label>
          <input onChange={handleForm} type='text' id='status' />
        </div>
    
      </div>
      <button disabled={formData === undefined ? true: false} >Add Todo</button>
    </form>
  )
}

export default AddTodo