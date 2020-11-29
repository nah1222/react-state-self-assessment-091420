import React from 'react';
import './App.css';
import YesNo from './yesNo';
import {yes,no} from './objects';
// import yes from './objects'
// import no from './objects'
function App() {
  return(
  <div>
  {<YesNo 
  yesStatement= {yes['yes-statement']}
  noStatement= {no['no-statement']}
  yesImage= {yes['yes-image']}
  noImage= {no['no-image']}
  />}
  </div>
  )}

export default App;
