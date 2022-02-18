// import logo from './logo.svg';
import './App.css';
// import {Fragment} from 'react'

function App() {
  // const name='리액트';
  // const number = 0;

  // return (
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>

  //   // <div>
  //   //   <h1>리액트 안녕!</h1>
  //   //   <h2>잘 작동하니?</h2>
  //   // </div>

  //   // <Fragment>
  //   //   <h1>리액트 안녕</h1>
  //   //   <h2>이건 잘 되나??</h2>
  //   // </Fragment>

  //   // <div>
  //   //   { name === '리액트' ? (
  //   //     <h1>리액트 입니다.</h1>
  //   //   ) : (
  //   //     <h1>리액트가 아닙니다.</h1>
  //   //   )}
  //   // </div>

  //   // <div>{ name === '리액트' ? <h1>리액트 입니다.</h1> : null}</div>

  //   <div>
  //     {
  //       name === '리액트' && <h1>리액트 입니다.</h1>
  //     }
  //     {
  //       number !== 0 && <h2>이건 나오나</h2>
  //     }
  //   </div>
  // );

  // const name = undefined;
  // return name || '값이 undefined 입니다.';

  // const name = undefined;
  // return <div>{name}</div>;

  // const name = undefined;
  // return <div>{name || '리액트'}</div>;

  const name = '리액트';
  const style = {
    backgroundColor:'black',
    color:'aqua',
    fontSize:'48px',
    fontWeight:'bold',
    padding:16
  };
  return (
      <div>
        <div style={style}>{name}</div>
        <div style={{
          backgroundColor: 'black',
          color: 'aqua',
          fontSize: '48px',
          fontWeight: 'bold',
          padding: 16
        }}>{name}</div>
        <div className='react'>{name}</div>

        <div className='react'>{name}</div>
        <input></input>
        {/* 이것이 주석 */}
        {/* 
        // 
        // 이렇게도 사용 가능
        // 
        */}
      </div>
    );
}

export default App;
