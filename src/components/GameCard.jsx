export default function GameCard (props) {

    return(
        <article className="m-5 hover:cursor-pointer hover:text-purple-400">
            <img className="max-w-xs max-h-72 object-fill" src={props.img} alt={props.game}/>
            <h3 className="font-bold hover:italic">{props.game}</h3>
            <div className="flex flex-row justify-between">
                <p>{props.viewers}</p>
                {props.new === true && <p className="text-blue-600">New</p>}
            </div>
        </article>
    ) 
}