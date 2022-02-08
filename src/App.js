import { useState, useEffect } from 'react'
import axios from 'axios'
import { UserCard } from './components/UserCard'
import { SearchBar } from './components/SearchBar'


function App() {
  
  const [allUsers, setAllUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  
  useEffect(() => {

    axios('https://random-data-api.com/api/users/random_user?size=30')
    .then( results => {
      setAllUsers(results.data)
      setFilteredUsers(results.data)
    })

  }, [])
  
  function handleKeyUp(e) {
    const filteredUsers = allUsers.filter(user =>
        user.first_name
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );

    setFilteredUsers(filteredUsers)
  }
  
  return (
    <>
      <SearchBar onKeyUp={handleKeyUp} />

      <ul className="relative z-0 divide-y divide-gray-200">
        {filteredUsers.map( user => 
          <li key={user.id}>
            <UserCard  user={user}/>
          </li>
        )}
      </ul>
    </>
  );
}

export default App;
