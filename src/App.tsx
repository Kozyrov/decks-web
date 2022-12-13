import Deck from './components/Deck/Deck';
import BladeMenuContainer from './components/BladeMenu/BladeMenuContainer';
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