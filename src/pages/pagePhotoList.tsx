import { useEffect, useState } from 'react';
import { Photo } from '../models/photo';
import BookList from '../components/bookList';
import BookSearchFilter from '../components/bookSearchFilter';

function PhotoPageList() {
    // const [count, setCount] = useState(0)
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);

    const [loading, setLoading] = useState(true);
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    }

    const fetchPhotos = async() => {
        console.log("fetch photos");
        const response: Response = await fetch("https://jsonplaceholder.typicode.com/photos", { method: "GET" });
        const resultados = await response.json();

        setPhotos(resultados);
        setFilteredPhotos(resultados);
        setLoading(false);
    }

    const filterPhotos = (texto: string) => {
        const filtered = photos.filter(p => p.title.includes(texto));
        setFilteredPhotos(filtered);
    }

    useEffect(() => {
        fetchPhotos()
    }, [])
  
    return (
      <>
        { 
            loading 
                ? <p>loading...</p> 
                : <>
                    <button onClick={handleClick}>Click { contador }</button>
                    <BookSearchFilter photos={filteredPhotos} handleChange={filterPhotos} />
                    <BookList photos={filteredPhotos} />
                  </>
        }       
      </>
    )
}

export default PhotoPageList