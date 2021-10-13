import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { getDatas } from './testApi/testApi';
import CreateUser from './CreateUser/CreateUser';
import UserList from './UserList/UserList';
import Header from './header/header';

// import 할때 * 을 사용 안하는게 좋다.
// 파일 하나에 많은 기능을 가져오면 일단 체크(의심)을 해봐야한다.

function App() {

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
    
  //   getUsers().then((response) => {
  //     console.log(response.data,'data')
  //     setUsers(response.data)
  //   })
  // },[]);
  
  const [datas, setDatas] = useState([]);

  const [inputs, setinputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  const nextId = useRef(1);
  const [users, setUsers] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;

    setinputs({
      ...inputs,
      [name]: value
    });
  };

  
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }

    setUsers([...users, user]);

    setinputs({
      username: '',
      email:''
    });

    // console을 찍어 유저 데이터가 잘 들어오는지 확인
    console.log(user,'create user')
    nextId.current += 1;
  };

  useEffect(() => {
    getDatas().then((response) => {
      // console을 찍어 api를 이용해 데이터가 잘 들어오는지 확인
      console.log(response.data,'TestApi');
      setDatas(response.data)
    })
  },[]);
  
  return (
    // <div>
    //   {users.map(user => (
    //     <li>
    //       {user.username}({user.name})
    //     </li>
    //   ))}
    // </div>
    <>
      <Header />
      <CreateUser
        username={username}
        useremail={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
      <div>
        {/* {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.email})
          </li>
        ))}; */}
        {datas.map(data => (
          <li key={data.id}>
            {data.name} ({data.username})
          </li>
        ))}
      </div>
    </>
  )
}

export default App;
