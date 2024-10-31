import { useState } from 'react';
import { Photo } from '../models/photo';
import BookList from '../components/bookList';

function PhotoPageList() {
    // const [count, setCount] = useState(0)
    const [photos, setPhotos] = useState<Photo[]>([
        {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
        },
        {
            albumId: 1,
            id: 2,
            title: "reprehenderit est deserunt velit ipsam",
            url: "https://via.placeholder.com/600/771796",
            thumbnailUrl: "https://via.placeholder.com/150/771796"
        },
        {
            albumId: 1,
            id: 3,
            title: "officia porro iure quia iusto qui ipsa ut modi",
            url: "https://via.placeholder.com/600/24f355",
            thumbnailUrl: "https://via.placeholder.com/150/24f355"
        },
    ]);
  
    return (
      <>
        <BookList photos={photos} />
      </>
    )
}

export default PhotoPageList