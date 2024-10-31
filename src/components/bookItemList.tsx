import { Photo } from "../models/photo"

export interface BookItemListProps {
    photo: Photo
}

function BookItemList(props: BookItemListProps) {

    return (
        <>
            <p>{ props.photo.title }</p>
        </>
    )

}

export default BookItemList