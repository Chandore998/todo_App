const AddItems = (data) =>{
    const action = {
        type:'ADD-ITEMS',
        payload:{
            data:data
        }
    }
    return action
}

const DeleteItems = (data) =>{
    const action = {
        type:'DELETE-ITEM',
        payload:{
            data:data
        }
    }
    return action
}

const UpdateItems = (data) =>{
    const action = {
        type:'UPDATE-ITEM',
        payload:{
            data:data
        }
    }
    return action
}
export {AddItems,DeleteItems,UpdateItems};

