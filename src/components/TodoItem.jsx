import React,{useRef,useState} from 'react';
import { useDispatch } from 'react-redux';
import deleteicon from '../Images/deleteicon.gif'
import updateicon from '../Images/updateicon.gif'
import { DeleteItems } from './redux/action/action';
import ModelTodoItems from './ModelTodoItem';

const Items = ({props}) =>{
    const {Input , id} ={...props}
    const [itemsModel, setItemsModel]  = useState(false)

    const handlerRef = useRef()
    const dispatch = useDispatch()

    const handlerDelete = () =>{
        const todoId = handlerRef.current.id
        dispatch(DeleteItems(todoId))
    }

    const handlerUpdate = () =>{
        setItemsModel(true)
    }

    function ForModel(){
        return <div className='absoulte'><ModelTodoItems setItemsModel={(value) => setItemsModel(value)} {...props}/></div> 
    }
    return (
        <div className='todoitem border'>
            <li id={id} ref={handlerRef} className='list-none'>{Input}</li>
            <div className='flex'>
                <img className='update mr-6 rounded-sm' src={updateicon} alt="update" onClick={handlerUpdate} />
                <img  className="delete" src={deleteicon} alt="delete" onClick={handlerDelete} />
            </div>
            <div className='absolute'>
            {itemsModel && ForModel()}
            </div>
        </div>
    )
}

export default Items;