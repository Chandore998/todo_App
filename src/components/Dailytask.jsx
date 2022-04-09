import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {AddItems} from './redux/action/action';
import { v4 as uuidv4 } from 'uuid';

const Dailytask = () =>{
    const [Input, setInput] = useState('')
    const dispatch = useDispatch()
    

    const handlerChange = (event) =>{
        setInput(event.target.value)
    }
    const handlerClick = (event) =>{

        event.preventDefault();
        const inputSchema = {
            Input,
            id: uuidv4()
        }
        dispatch(AddItems(inputSchema))
        setInput('')
    }
    return (
        <form onSubmit={handlerClick}>
            <div className="todo-background">
                To-do App
            </div>
        <div className='flex justify-between items-center px-3 '>
            <input type="text" className='border-2 hover:border-orange-600 rounded-sm text-2xl m-3' value={Input} onChange={handlerChange} required />
            <button className="px-3 py-2 bg-fuchsia-500 rounded-sm text-white hover:bg-fuchsia-700" type='submit'>
                +
            </button>
        </div>
        </form>
    )
}

export default Dailytask