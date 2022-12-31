import styles from './App.module.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { TermsAndConditions } from "./pages/terms_and_conditions/TermsAndConditions";
import { Sidebar } from './components/sidebar/Sidebar';

function App() {

  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
