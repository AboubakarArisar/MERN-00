import { useState } from 'react'

import './App.css'

function App() {
  const [friendName, setFriendName] = useState("");
  const [friendsList, setFriendsList] = useState([]);

  const handleNameChange = (event) => {
    setFriendName(event.target.value);
  };

  const handleAddFriend = () => {
    if (friendName.trim() !== "") {
      setFriendsList([...friendsList, friendName]);
      setFriendName("");
    }
  };

  const handleClearText = () => {
    setFriendName("");
  };


  return (
    <>
      <div className="container">
        <h1>Assignment Question no 6</h1>
        
        <div className="box">
          <input type="text"
           placeholder="Friend name"  
           value={friendName}
           onChange={handleNameChange}/>
          <button onClick={handleClearText}>Clear</button>
          <button onClick={handleAddFriend}>Save</button>
          
        </div>
        <div className="list">
        <ul>
        {friendsList.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
        </div>
      </div>
    </>
  )
}

export default App
