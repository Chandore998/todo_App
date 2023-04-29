import React,{useState} from 'react';
import {Button,Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
import { useDispatch } from 'react-redux';
import {UpdateItems} from './redux/action/action'


const ModelTodoItems = ({setItemsModel,Input, id}) =>{

    const [show , setShow] = useState(true)
    const dispatch = useDispatch()

    const [updateInput, setUpdateInput] = useState(Input)

    const handlerModel = () =>{
      setShow(!show)
      setItemsModel(false)
    }

    const handlerUpdate = () =>{
      const schema = {
        Input:updateInput,id
      }
      dispatch(UpdateItems(schema))
      handlerModel()
      console.log()
    }
    return (<>        
                <div>
                  <Modal isOpen={show} size={'75'}>
                    <ModalHeader className='m-header' toggle={handlerModel} style={{borderBottom: 'none'}}>Update Todo-Item</ModalHeader>
                    <ModalBody  className='flex align-middle justify-center'>
                      <input type="text" className='border-2 hover:border-orange-600 rounded-sm text-2xl m-3 w-75' value={updateInput} onChange={(e) => setUpdateInput(e.target.value) }/>
                    </ModalBody>
                    <ModalFooter  style={{borderTop: 'none',flexWrap: 'nowrap', justifyContent:'center'}}>
                      <Button
                        color="primary"
                        onClick={handlerUpdate}
                      >
                        update
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
    </>)
}

export default ModelTodoItems;