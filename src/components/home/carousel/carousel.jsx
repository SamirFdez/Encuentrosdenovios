import React from "react";
import {Container, Row, Carousel} from "react-bootstrap";
import { useState } from "react";
import carouselHomeStyles from "./carousel.module.css"

export const CarouselHome = function(){

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return( 
        <>
            <Container>
                <Row>
                <Carousel activeIndex={index} onSelect={handleSelect} className={carouselHomeStyles.Carousel}> 
                    <Carousel.Item style={{height:"60em"}}>
                        <img className={carouselHomeStyles.ImgCarousel}
                        src="https://www.greathomesaz.com/wp-content/uploads/2021/08/how-does-plumbing-work-e1548696261445.jpeg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:"60em"}}>
                        <img className={carouselHomeStyles.ImgCarousel}
                        src="https://www.greathomesaz.com/wp-content/uploads/2021/08/how-does-plumbing-work-e1548696261445.jpeg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height:"60em"}}>
                        <img className={carouselHomeStyles.ImgCarousel}
                        src="https://www.greathomesaz.com/wp-content/uploads/2021/08/how-does-plumbing-work-e1548696261445.jpeg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Row>
            </Container>
        </>
    )
}




