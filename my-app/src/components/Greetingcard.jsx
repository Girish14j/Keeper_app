export default function Greetingcard(props){
    return(
        <div className="card">
            <h1>{props.title}</h1>
            <h2>{props.name}</h2>
            <p>{props.message}</p>
        </div>
    )
}