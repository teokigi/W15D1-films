import React, {Component} from "react";
import Film from "./Film.js";

class FilmList extends Component{
    render(){
        const filmNodes = this.props.films.map(film=>{
            return (<Film key={film.id} name={film.name} url={film.url} />)
        })

        return (
            <ul>
                {filmNodes}
            </ul>
        )
    }
}

export default FilmList;
