import { MapContact } from "../components/contact/map/map"
import { DetailViewContact } from "../components/contact/detailViewContact/detailViewContact"
import { FormContact } from "../components/contact/form/formContact"

export const Contact = function(){

    return(
        <>
        <MapContact/>
        <DetailViewContact/>
        <FormContact/>
        </>
    )
}