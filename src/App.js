import React,{useRef, useState} from 'react';
import './App.css';
function App() {
  const list = [
    {
      id : 1,
      name : 'HP',
      price : '124'
    },
    {
      id : 2,
      name : 'Dell',
      price : '1264'
    },
  ]
  const [lists, setList] = useState(list)
  const [updateState, setUpdateState] = useState(-1)
  return (
    <div className='crud'>
      <div>
        <AddList setList = {setList} />
        <form onSubmit={handleSubmit}>
          <table>
            {
              lists.map((current)=>(
                updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                <tr>
                  <td>{current.name}</td>
                  <td>{current.price}</td>
                  <td>
                      <button className='edit'  type='button' onClick={()=> handleEdit(current.id)}>Edit</button>
                      <button className='delete' type='button' onClick={()=>handleDelete(current.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </table>
        </form>
      </div>
    </div>
  );
   
    function handleEdit(id){
      setUpdateState(id)
    }
    function handleDelete(id){
      const newlist = lists.filter((li)=> li.id !== id)
      setList(newlist)
    }
    function handleSubmit(e){
      e.preventDefault()
      const name= e.target.elements.name.value;
      const price = e.target.elements.price.value;
      const newlist = lists.map((li) => (
        li.id === updateState ? {...li, name:name, price : price} : li
      ))

      setList(newlist)
      setUpdateState(-1)
    }
}
  
    function EditList({current , lists, setList}){
        function handleInputname(e){
          const value = e.target.value;
          const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
          ))

          setList(newlist)
        }
        function handleInputprice(e){
          const value = e.target.value;
          const newlist = lists.map((li) => (
            li.id === current.id ? {...li, price :value} : li
          ))

          setList(newlist)
        }
        return(
          <tr>
            <td><input type='Text' name='name' onChange={handleInputname} value={current.name}></input></td>
            <td><input type='Text' name='price' onChange={handleInputprice} value={current.price}></input></td>
            <td><button type='submit'>Update</button></td>
          </tr>
        )
      }
    
    function AddList({setList}){
      const nameRef =useRef()
      const priceRef = useRef()

      function handleSubmit(e){
        e.preventDefault();
        const name = e.target.elements.name.value;
        const price = e.target.elements.price.value;
        console.log('e',price);
        const newlist = {
          id:3,
          name,
          price
        }
        setList((prevList)=>{
          return prevList.concat(newlist)
        })

      }
      return(
        <form className='addForm' onSubmit={handleSubmit} >
          <input type='text'  name='name' placeholder='Enter Name'></input>
          <input type='text' name='price' placeholder='Enter Price'></input>
          <button type='submit' className='add'>Add</button>
        </form>
      )
    }

export default App;
