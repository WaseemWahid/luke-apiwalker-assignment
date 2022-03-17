import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Planet = () => {
    const { id } = useParams()
    const [planet, setPlanet] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res => {
            console.log(res.data)
            setPlanet(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    return(
        <fieldset>
            {
                planet ?
                    <div>
                        <h1>{planet.name}</h1>
                        <p>Climate: {planet.climate}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Diameter: {planet.diameter}</p>
                        <p>Population: {planet.population}</p>
                    </div>:
                    <h1>No such planet. Please try another ID</h1>
                
            }
        </fieldset>
    )
}

export default Planet