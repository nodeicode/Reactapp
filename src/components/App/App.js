import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../../../static/index.css'
import Link from 'next/link';
import { white } from 'ansi-colors';
const Sty = makeStyles({
  button:{
    color:'white',
  }
});

function App() {
  const css = Sty();
  return (
    <div className="App">
      <header className="App-header"><h1>React and Nextjs App success yay!</h1></header>
      <Button className="uib"variant="outlined" href="/Form" className={css.button}>route with nextjs!</Button>
    </div>
  );
}

export default App;
