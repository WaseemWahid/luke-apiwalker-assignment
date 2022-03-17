import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Person = () => {
    const { id } = useParams()
    const [person, setPerson] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => {
            console.log(res.data)
            setPerson(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    return(
        <fieldset>
            {
                person ?
                    <div>
                        <h1> {person.name} </h1>
                        <p>Year of Birth: {person.birth_year}</p>
                        <p>Heigh: {person.height}</p>
                        <p>Mass: {person.mass} </p>
                        <p>Hair: {person.hair_color} </p>
                        <p>Skin: {person.skin_color} </p>
                    </div>:
                    <h1>These aren't the droids you're looking for. Please Try a different ID
                    </h1>
                    
            }
        </fieldset>
    )
}

export default Person