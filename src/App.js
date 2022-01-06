import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { MovieDetails } from './pages/MovieDetails';
import styles from "./app.module.css";

function App() {
  return (
      <BrowserRouter>
        <div>
            <header>
              <Link to="/">
                <h1 className={styles.title} title="Home">Movies</h1>
              </Link>
            </header>
            <main>
              <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="/movie/:id" element={ <MovieDetails /> } />
              </Routes>
            </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
