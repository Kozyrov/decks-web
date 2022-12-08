import InlineCardTemplate from './components/InlineCard/InlineCardTemplate';
import Deck from './components/Deck/Deck';
import { useState } from 'react';


function App() {
  const [cards, setCards] = useState<string[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <Deck deck={cards}/>
        <InlineCardTemplate addCardToDeck={(title) => setCards([...cards, title])}/>
      </header>
    </div>
  );
}

export default App;
