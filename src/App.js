import styles from './App.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { TermsAndConditions } from "./pages/terms_and_conditions/TermsAndConditions";
import { Sidebar } from './components/sidebar/Sidebar';

function App() {

  return (
      <div className={styles.App}>
        <Header />
        <Sidebar />
        <Home />
        <Footer />
      </div>
  );
}

export default App;
