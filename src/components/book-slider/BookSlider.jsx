import "./bookslider.css"
import { useState } from "react";
import Rating from "./Rating";
const BookSlider = ({books}) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex  -1);
        } else {
            setSlideIndex(slideIndex + 1 );
        }
    }
    return ( 
        <div className="book-slider-container">
           {slideIndex > 0 && <i onClick={()=> handleClick("left")} className="bi bi-chevron-left book-slider-arrow-left"></i>}
            <div  style={{transform:`translateX(${slideIndex *-340}px)`}} className="book-slider-wrapper">
                {books.map((item) => <div className="book-slide-item" key={item.id}>
                    <img src={`/books/${item.image}`} alt={item.title} className="book-slide-item-img" />
                    <h3 className="book-slide-item-title">{item.title}</h3>
                    <Rating rating={item.rating} reviews={item.reviews} />
                    <div className="book-slide-item-price">${item.price}</div> 
                    <div className="book-slider-icons-wrapper">
                        <i className="bi bi-eye-fill"></i>
                        <i className="bi bi-cart-plus"></i>
                    </div>
                    </div>)}
            </div>
            {slideIndex < books.length - 3 && <i onClick={()=> handleClick("right")} className="bi bi-chevron-right book-slider-arrow-right"></i>}
        </div>
     );
}
 
export default BookSlider;