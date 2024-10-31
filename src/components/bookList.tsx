import { Photo } from "../models/photo"
import BookItemList from "./bookItemList"

export interface BookListProps {
    photos: Photo[]
}

function BookList(props: BookListProps) {

    return (
        <>
            <div>
                {
                    props.photos.map((photo) => (
                        <BookItemList photo={photo} key={photo.id} />
                    ))
                }
            </div>
        </>
    )

}

export default BookList