
const initialState = {
    task:[]
}
const TaskReducer = (state = initialState , action)=>{
    switch(action.type){
        case'ADD-ITEMS':
            return ({...state,task:[action.payload, ...state.task]})
        case'DELETE-ITEM':
            const result = (state.task.filter((items) => items.data.id !== action.payload.data)) 
            return {task:result}
        case'UPDATE-ITEM':
            let results = state.task.map((items)=>{
                if(items.data.id === action.payload.data.id){
                    
                    return ({data:{...items.data,Input:action.payload.data.Input}})
                }
                return {...items}
            })
            return {task:results}
        default:
            return state
    }
}

export default TaskReducer