import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Api, { getUsers } from './api/Api';
import TestApi, { getDatas } from './testApi/testApi';

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
  useEffect(() => {
    getDatas().then((response) => {
      console.log(response.data,'TestApi');
        setDatas(response.data)
    })
  },[])
  
  
  return (
    // <div>
    //   {users.map(user => (
    //     <li>
    //       {user.username}({user.name})
    //     </li>
    //   ))}
    // </div>
    <>
      <div>
        {datas.map(data => (
          <li key={data.id}>
            {data.name} ({data.username})
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
