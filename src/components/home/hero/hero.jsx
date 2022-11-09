import React from "react";
import {Carousel} from "react-bootstrap";
import { useState } from "react";
import heroHomestyles from "./hero.module.css"

export const Herohome = function(){

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return( 
        <>
                <Carousel activeIndex={index} onSelect={handleSelect} className={heroHomestyles.Carousel}> 
                    <Carousel.Item style={{height:"70em"}}>
                        <img className={heroHomestyles.ImgCarousel}
                        src="https://www.flores.ninja/wp-content/uploads/2017/05/Flores.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item style={{height:"70em"}}>
                        <img className={heroHomestyles.ImgCarousel}
                        src="https://www.flores.ninja/wp-content/uploads/2017/05/Flores.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{height:"70em"}}>
                        <img className={heroHomestyles.ImgCarousel}
                        src="https://www.flores.ninja/wp-content/uploads/2017/05/Flores.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </>
    )
}




