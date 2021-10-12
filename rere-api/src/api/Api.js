import React, { useState } from 'react';
import axios from 'axios';

export function getUsers() {
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
    });
}

export function Api() {
    // data를 선언해줄때 적합한 초기값을 꼭 선언해 줘야한다. null 이런거 쓰면 안됌
    const [datas, setDatas] = useState([]);

    // then => 실행할 함수를 인자로 받는다.
    // async 같은 경우 비동기 처리 방식으로 다른 코드에 영향을 받지 않고 data가 들어오면 그때 동작하는 방식이다.
    
    // let response = axios.get(
    //     'https://jsonplaceholder.typicode.com/users'
    // ).then((response) => {
    //     console.log(response.data,'apii')
    //     setDatas(response.data)      
    // });

    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
    }).then((response) => {
        console.log(response.data,'apii')
        setDatas(response.data) 
    });
        
    return(
        <div>
            {/* null 체크가 필요한 부분. */}
            {datas.map(data => (
                <li key={data.id}>
                    {data.username} ({data.name})
                </li>
            ))}
        </div>
    );
};

export default Api;