import Deck from './features/Deck/Deck';
import BladeMenuContainer from './features/BladeMenu/BladeMenuContainer';
import styles from './App.module.scss';

function App() {
  return (
    <div className="App">
      <header className="App_header">
      </header>
      <div className={styles.App_body}>
        <BladeMenuContainer />
        <Deck />
      </div>
    </div>
  );
}

export default App;