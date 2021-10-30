import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';



function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge, uClg) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList, 
        {name: uName, age: uAge, coll: uClg, id: Math.random().toString() }
      ];
    });
  }
  return (
    <Fragment>
    <AddUser onAddUser={addUserHandler} />
    <UserList users={userList} />
    </Fragment>
  );
}

export default App;