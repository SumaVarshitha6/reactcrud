import React,{useState} from 'react'

function Crud() {
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
  return (
    <div className='crud'>
        <table>
            {
              lists.map((current)=>(
                // updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> : onClick={()=> handleEdit(current.id)}  onClick={()=>handleDelete(current.id)}
                <tr>
                  <td>{current.name}</td>
                  <td>{current.price}</td>
                  <td>
                      <button className='edit' >Edit</button>
                      <button className='delete' type='button'>Delete</button>
                  </td>
                </tr>
              ))
              }
          </table>
    </div>
  )
}

export default Crud