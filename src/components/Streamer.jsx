export default function Streamer (props) {
    let colorStatus = "text-red-600"
    if (props.status === "Online") {
        colorStatus = "text-green-600"
    } 
    
    return(
        <div className="flex flex-row m-2 justify-between text-sm hover:cursor-pointer">
            <img className="max-w-[20%] rounded-3xl" src={props.img} alt={props.name} />
            <div className="flex flex-row w-24">
                <div className="filter-card-info">
                    <h4>{props.name}</h4>
                    <p>{props.game}</p>
                </div>
            </div>
            <p className={colorStatus}>{props.status}</p>
        </div>
    ) 
}