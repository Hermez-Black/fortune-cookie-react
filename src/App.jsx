import './App.css';
import { useState } from 'react';
import { makeRandomNumber } from './utils/math';

import { CSSTransition } from 'react-transition-group';

import AuthorPhrase from './components/AuthorPhrase';
import Btn from './components/Btn';
import CardText from './components/CardText';
import Title from './components/Title';

import phrases from './data/phrases.json';
import { NUMBER_BACKGROUND_IMGS } from './constants';

function App() {
  // todo: make animations, use hover and mediaqueries(responsive), then tests and deploy release version
  const [indexPhrase, setIndexPhrase] = useState(0);
  const [indexImg, setIndexImg] = useState(1);

  const lengthArrayData = phrases.length - 1;

  const nextPhrase = () => {
    if (indexPhrase === lengthArrayData) {
      setIndexPhrase(0);
    } else {
      setIndexPhrase(makeRandomNumber(lengthArrayData));
      setIndexImg(makeRandomNumber(NUMBER_BACKGROUND_IMGS));
    }
  };

  return (
    <div
      className="App"
      style={
        {backgroundImage: `url(/fortuneSquare/fondo${indexImg}.png)`}
      }>
      {/* <CSSTransition
        in={indexPhrase ? true : false}
        timeout={500}
        className="mi-animacion"
        unmountOnExit >
        <div>HOLAAA</div>
      </CSSTransition> */}
      <Title />
      <Btn
        handler={nextPhrase}
        text="Probar mi suerte" />
      <CardText textPhrase={phrases[indexPhrase]}/>
      <AuthorPhrase author={phrases[indexPhrase]}/>
    </div>
  );
}

export default App;
