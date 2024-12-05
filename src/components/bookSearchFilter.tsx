import { useState } from "react";
import { Photo } from "../models/photo";

export interface BookSearchFilterProps {
    photos: Photo[];
    handleChange: (texto: string) => void;
};

function BookSearchFilter(props: BookSearchFilterProps) {

    const [textFilter, setTextFilter] = useState("");

    return (
        <>
            <p>Buscador de photos por titulo</p>
            <input type="text" placeholder="Introduce titulo..." 
                value={textFilter} 
                onChange={
                    (e) => {
                        setTextFilter(e.target.value);
                        props.handleChange(e.target.value);
                    }
                }
            />
            <p>el valor es { textFilter }</p>
        </>
    )

}

export default BookSearchFilter