import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);
  const [status ,setStatus] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
 
  const handleDelete=(index) => {
    let copyTask = [...task];
    copyTask.splice(index,1);
    setTask(copyTask);
  }
  const handleAddTask = () => {
    if (title.trim() === "" && desc.trim() === "") {
      return;
    }

    const newTask = { title, desc, status };
    setTask([...task, newTask]);
    setTitle("");
    setDesc("");
    setStatus("");
  }
  const handleEdit = (index) => {
    setEditingIndex(index);
  }
  return (
    <>
    <div className="content">
      <h1 className='bg-black  text-white p-5 text-5xl font-bold text-center mainHeading'>My Todo List</h1>
      <form className='contentForm flex justify-center items-center'
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTask();
      }}>
        <input type="text" className='text-red-600 md:w-32 lg:w-48 text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded bg-transparent' value={title} onChange={(e) => {
          setTitle(e.target.value);
        }} placeholder='Enter Task here' />
        <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded bg-transparent' value={desc} onChange={(e) => {
          setDesc(e.target.value);
        }} placeholder='Enter Description here' />
        <select className= 'text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded bg-transparent' onClick={(e) => {
          setStatus(e.target.value);
        }}>
          <option value="completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Pending">Pending</option>
        </select>
        <button className=' hello bg-red-400 text-white px-4 py-3 text-2xl font-bl rounded m-5'>Add Task</button>
      </form>
      <hr />
      <div className="p-8  list">
        {task.length > 0 ? (
          <ul>
            {task.map((item, index) => (
              <li key={index} className='flex items-center justify-between mb-8'>
                <div className='flex items-center justify-around mb-5 w-2/3'>
                  <h5 className='text-2xl font-semibold'>➡️{item.title}</h5>
                  <h6 className='text-xl medium'>{item.desc}</h6>
                  <h6 className='text-xl medium'>{item.status}</h6>
                </div>
                <div className='flex items-center justify-around mb-5 w-2/3'>
                <button className='bg-red-400 text-white rounded font-bold px-4 py-2 mb-5' onClick={()=> handleEdit(index)}>Edit</button>
                <button className='bg-red-400 text-white rounded font-bold px-4 py-2 mb-5' onClick={()=>handleDelete()}>Delete</button>
                </div>
              </li>
              
            ))}
          </ul>
          
        ) : (
          <h2 className='font-bold px-5 py-2'>No Task Available 🤔</h2>
        )}
      </div>
      {editingIndex !== null && (
        <div className="popup rounded  mb-5 flex justify-center items-center flex-col">
          <h2 className='font-medium'>Edit Task Title</h2>
          <input
          className='text-2xl font-semibold border-zinc-600 bg-transparent border-2 mt-4 rounded'
            type="text"
            value={task[editingIndex].title}
            onChange={(e) => {
              const updatedTask = [...task];
              updatedTask[editingIndex].title = e.target.value;
              setTask(updatedTask);
            }}
          />
          <input
          className='text-2xl font-semibold border-zinc-600 bg-transparent border-2 mt-4 rounded'
            type="text"
            value={task[editingIndex].desc}
            onChange={(e) => {
              const updatedTask = [...task];
              updatedTask[editingIndex].desc = e.target.value;
              setTask(updatedTask);
            }}
          />
           <select
      className='text-2xl font-semibold border-zinc-600 bg-transparent border-2 mt-4 rounded'
      value={task[editingIndex].status}
      onChange={(e) => {
        const updatedTask = [...task];
        updatedTask[editingIndex].status = e.target.value;
        setTask(updatedTask);
      }}
    >
      <option value="completed">Completed</option>
      <option value="incomplete">Incomplete</option>
      <option value="pending">Pending</option>
    </select>
          <button
          className='bg-green-400 text-white rounded font-bold px-4 py-2 mt-5' 
          onClick={() => setEditingIndex(null)}>Save</button>
        </div>
      )}
      </div>
    </>
  )
}


export default App