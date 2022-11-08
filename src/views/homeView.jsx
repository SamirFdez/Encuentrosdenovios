import { CarouselHome } from "../components/home/carousel/carousel"
import { GalleryDisplayHome } from "../../src/components/home/galleryDisplay/galleryDisplay"
import { Herohome } from "../components/home/hero/hero"

export const Home = function(){
    
    return (
        <>  
            <Herohome/>
            <GalleryDisplayHome/>
            <CarouselHome/>
        </>
    )

}