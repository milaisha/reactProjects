import {FaTrashAlt} from "react-icons/fa";

  const lineItem = () =>{
    return (
        <li className= "item">
                      <input
                      type= "checkbox"
                      onChange= {()=>handleCheck (item.id)} 
                      checked ={item.checked}
                      />
                      <label
                      style={(item.checked) ? { textDecoration:'line-through'} : null}
                      onDoubleClick={()=> handleCheck(item.id)}>
                          {items.item}
                      </label>
                      <FaTrashAlt
                       onClick= {() => handleDelete(item.id)}
                      role= "button" tabIndex= "0"
                      aria-label={'Delete ${item.item}'}
                       />
                    </li>

    )
}

export default LineItem
