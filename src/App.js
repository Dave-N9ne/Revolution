import Header from './components/Header.js';
import Coffee from './components/Coffee.js'
import Taste from './components/Taste.js';
import Giftset from './components/Giftset.js';
import Combo from './components/Combo.js';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Coffee />
        <Taste />
        <Giftset />
        <Combo />
      </main>
    </>
  )
}

export default App;