import {useState} from "react";
import Movie from "./Movie";

const m = [
    { id: 1, title: 'Toy Story', releaseYear: 1995 },
    { id: 2, title: 'The Iron Giant', releaseYear: 1999 },
    { id: 3, title: 'Spider-Man: Into the Spider-Verse', releaseYear: 2018 },
];

function Movies(movies = m){

    const [movieList, SetMovieList] = useState(m);

    const newMovie = () => {
        const currentList = [...movieList];
        const nextId = Math.max(...movieList.map(m => m.id));
        const m = {
            title: 'NewMovie',
            releaseYear: new Date().getFullYear(),
            id: nextId + 1
        }
        currentList.push(m);
        SetMovieList(currentList);
    }

    const deleteMovie = (id) => {
        const currentList = [...movieList];
        const newList = currentList.filter(m => m.id !== id);
        SetMovieList(newList);
    }

    return (
        <div>
            <label className= "block text-4xl text-red-500 font-bold mb-1 md:mb-0 mr-4">New Movie
                <button
                    onClick={newMovie}
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-2 rounded">
                    Make new movie
                </button>
            </label>
            <div>
                {movieList.map(m =>
                <Movie key={m.id} onClick={deleteMovie} id={m.id} title={m.title} releaseYear={m.releaseYear} />
            )}
            </div>

        </div>
    )
}
export default Movies;

