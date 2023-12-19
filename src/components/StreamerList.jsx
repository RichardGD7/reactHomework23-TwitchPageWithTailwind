import Streamer from "./Streamer"

export default function StreamerList () {
    return(
        <aside >
            <h3>Canales Recomendados</h3>
            <Streamer 
            name="Ninja"
            game="Just chatting"
            img="https://static-cdn.jtvnw.net/jtv_user_pictures/87a9b094-8e60-44a3-b79b-8e676494ba9d-profile_image-70x70.png"
            status="Online"/>
            <Streamer 
            name="shroud"
            game="Ready or Not"
            img="https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png"
            status="Offline"/>
            <Streamer 
            name="MarioTQ"
            game="Rust"
            img="https://static-cdn.jtvnw.net/jtv_user_pictures/6912ed6d-bf47-4024-822c-d2adccd999ea-profile_image-70x70.png"
            status="Online"/>
            <Streamer 
            name="elded"
            game="Fornite"
            img="https://static-cdn.jtvnw.net/jtv_user_pictures/9eb48e6a-eae8-49f7-933a-b9a047234054-profile_image-70x70.png"
            status="Offline"/>
            <Streamer 
            name="summit1g"
            game="Ready or Not"
            img="https://static-cdn.jtvnw.net/jtv_user_pictures/99aa4739-21d6-40af-86ae-4b4d3457fce4-profile_image-70x70.png"
            status="Online"/>
            <Streamer 
            name="vickypalami"
            game="Fornite"
            img="https://static-cdn.jtvnw.net/jtv_user_pictures/fd9bf69a-913f-4040-927e-cbdb21f40bd2-profile_image-70x70.png"
            status="Online"/>
        </aside>
    ) 
}