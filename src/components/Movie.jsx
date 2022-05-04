function Movie(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.id}</p>
            <p>{props.releaseYear}</p>
            <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={props.onClick}>Delete</button>
        </div>
    )
}
export default Movie;