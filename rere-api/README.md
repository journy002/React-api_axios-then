# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



# React axios, then 을 이용하여 api Get 사용해보기

## import 할때
import 할때 * 을 사용 안하는게 좋다.

파일 하나에 많은 기능을 가져오면 일단 체크(의심)을 해봐야한다.

## useState 초기값 지정 할때

data를 선언해줄때 적합한 초기값을 꼭 선언해 줘야한다. null 이런거 쓰면 안됌
ex) const [user, setUsers] = useState([]); 초기값이 배열로 되어있냐 객체로 되어있냐에 따라 초기값 지정이 달라진다.

useState 초기값에 []을 넣어준 이유 (Network창 or console창에서 데이터가 들어오는 타입(배열 or 객체)을 보고 초기값을 넣어줘야 한다.)

처음엔 인터넷에 나온대로 null 값을 넣어주었다, 하지만 데이터는 나오지 않았다

책임님의 설명을 듣고난후 console창에서 데이터가 들어오는 구조를 보았더니 배열안에 객체로 들어온것을 확인.

그러므로 초기값은 빈배열로 지정해주어야 한다는 걸 알았다.

## axios 사용시

then => 실행할 함수를 인자로 받는다.

async 같은 경우 비동기 처리 방식으로 다른 코드에 영향을 받지 않고 data가 들어오면 그때 동작하는 방식이다.
async는 보통 사용자가 어떤 행동을 취하고 있을때 계속 데이터가 돌아가야 하는 상황일때 많이 쓰인다.
예) 다운로드 등..