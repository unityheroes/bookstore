import './App.css';
import BookSlider from './components/book-slider/BookSlider';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeadingTitle from './components/heading-title/HeadingTitle';
import Services from './components/services/Services';
import Slider from './components/slider/Slider';
import {books} from "./data/books"

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Services />
      <HeadingTitle title="Featured Books" />
      <BookSlider books={books} />
      <HeadingTitle title="Best Sellers" />
      <BookSlider books={books} />
      <HeadingTitle title="New Arrivals" />
      <BookSlider books={books} />
      <Footer />
    </div>
  );
}

export default App;
