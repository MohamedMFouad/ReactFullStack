import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import data from './testData.json'

ReactDOM.render(
<App contests={data.contests}/> ,
  document.getElementById('root')
);
// setTimeout(()=>{
//   ReactDOM.render(
//     <h3>sdasd</h3>,
//     document.getElementById('root')
//   )
// },4000);
