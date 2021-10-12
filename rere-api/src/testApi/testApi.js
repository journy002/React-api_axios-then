import React, { useState } from 'react'
import axios from 'axios'

export function getDatas() {
    return axios ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    })
}


export function TestApi() {
    // useState 초기값에 []을 넣어준 이유 (항상 response 데이터 타입을 보고 값을 넣어줘야 한다.)
    // 처음엔 인터넷에 나온대로 null 값을 넣어주었다, 하지만 데이터는 나오지 않았다
    // 책임님의 설명을 듣고난후 console창에서 데이터가 들어오는 구조를 보았더니 배열안에 객체로 들어온것을 확인.
    // 그러므로 초기값은 빈배열로 지정해주어야 한다는 걸 알았다.

    const [datas, setDatas] = useState([]);

    // axios를 사용하는 방법은 두가지로 나누어 볼 수 있다.
    // 첫째는 지금처럼 .then()을 사용하는 방법이고 두번째 방법은 async await의 비동기 처리 방식이다.
    // .then()을 사용해서 api를 호출하는것을 추천한다.(더 쉬운 방법이라고 얘기해주심. 내가 봐도 그렇다.) 
    // 비동기로 만들경우 그런 상황이 온다. 예) 다운로드, 사용자가 버튼을 눌렀을때 다른 작업이 돌때 등..(사용자가 뭔가를 할때와 상관없이 무언가가 계속 돌아야 할때)
    axios ({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then((response) => {
        console.log(response.data,'TestApi');
        setDatas(response.data)
    })   

    return (
        <div>
            {datas.map(data => {
                <li key={data.id}>
                    {data.username} ({data.name})
                </li>
            })}
        </div>
    )
}

export default TestApi;