import './slider.css';
import book1 from '../../assets/images/book1.png';
import book2 from '../../assets/images/book2.png';
import book3 from '../../assets/images/book3.png';
import { useState } from 'react';
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        if (direction === 'right') {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }
    return (<div className="slider-container">
        {slideIndex !== 0 && <i onClick={() => handleClick('left')} className="bi bi-chevron-left arrow-left"></i>}

        <div style={{ transform: `TranslateX(${slideIndex * -100}vw)` }} className="slider-wrapper">
            <div className="slide first-slide">
                <div className="slide-image-wrapper">
                    <img src={book1} alt="Book 1" className="slide-image" />

                </div>
                <div className="slide-info-wrapper">
                    <h2 className="slide-info-title">Discover Your Next Favorite Book</h2>
                    <p className="slide-info-desc">Explore our curated collection of books and find your next great read.</p>
                </div>
            </div>
            <div className="slide second-slide">
                <div className="slide-image-wrapper">
                    <img src={book2} alt="Book 1" className="slide-image" />

                </div>
                <div className="slide-info-wrapper">
                    <h2 className="slide-info-title">check out our new collection</h2>
                    <p className="slide-info-desc">We Send you the books you love.</p>
                </div>
            </div>
            <div className="slide third-slide">
                <div className="slide-image-wrapper">
                    <img src={book3} alt="Book 1" className="slide-image" />

                </div>
                <div className="slide-info-wrapper">
                    <h2 className="slide-info-title">Books for Everyone</h2>
                    <p className="slide-info-desc">Can read any book you want, anytime, anywhere.</p>
                </div>
            </div>
        </div>
        {slideIndex !== 2 && <i onClick={() => handleClick('right')} className="bi bi-chevron-right arrow-right"></i>}
    </div>);
}

export default Slider;