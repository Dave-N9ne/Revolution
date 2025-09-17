import './App.css';

import HeaderContainer from './components/HeaderContainer';
import Header from './components/HeaderContainer';

import Taste from './components/Taste.js';
import Giftset from './components/Giftset.js';
import Combo from './components/Combo.js';

function App() {
  return (
    <>
      <Taste />
      <Giftset />
      <Combo />
    </>
  )
}

export default App;