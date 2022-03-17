import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HeaderForm = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const history = useHistory("")

    const handleSubmit =(e) => {
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }
    return (
        <fieldset>
            <form onSubmit={handleSubmit}>
                <p>
                    Catetegory:
                    <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
                        <option hidden>Choose a category</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                    ID:
                    <input type="text" name="id" value={id} onChange={e=>setId(e.target.value)} />
                    <button>Search</button>
                </p>
            </form>
        </fieldset>
    )
}
export default HeaderForm