import GameCard from "./GameCard"

const cards = [
    {
        game:"Just Chatting",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
        viewers:"440K"  
    },
    {   game:"Fornite",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg",
        viewers:"159K"
    },
    {
        game:"League of Leagends",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
        viewers:"78.6K"
    },
    {
        game:"Call of Dutty Warzone",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
        viewers:"48K"
    },
    {
        game:"Minecraft",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
        viewers:"31K"
    },
    {
        game:"Valorant",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
        viewers:"71K"
    },
    {
        game:"Lethal Company",
        new: true,
        img:"https://static-cdn.jtvnw.net/ttv-boxart/2085980140_IGDB-285x380.jpg",
        viewers:"75K"
    },
    {
        game:"Overwatch 2",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg",
        viewers:"23K"
    },
    {
        game:"The Finals",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/1910103699_IGDB-285x380.jpg",
        viewers:"21K"
    },
    {
        game:"Rust",
        new: true,
        img:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
        viewers:"152K"
    },
    {
        game:"APEX Leagends",
        new: true,
        img:"https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg",
        viewers:"26K"
    },
    {
        game:"Avatar",
        new:true,
        img:"https://static-cdn.jtvnw.net/ttv-boxart/41917829_IGDB-285x380.jpg",
        viewers:"7.7K"
    },
    {
        game:"Rainbow Six",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/460630_IGDB-285x380.jpg",
        viewers:"5.8K"
    },
    {
        game:"CyberPunk",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/65876-285x380.jpg",
        viewers:"1.8K",
    },
    {
        game:"God of War",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-285x380.jpg",
        viewers:"5.8K"
    },
    {
        game:"Spider-man 2",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/1967084783_IGDB-285x380.jpg",
        viewers:"311"
    },
    {
        game:"Warframe",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/66170_IGDB-285x380.jpg",
        viewers:"5.2K"
    },
    {
        game:"Halo Infiniti",
        img:"https://static-cdn.jtvnw.net/ttv-boxart/506416-285x380.jpg",
        viewers:"5.2K"
    }
]

export default function CategoryList () {
    return(
        <main className="grid grid-cols-5 ">
            {cards.map((card) => {
                return(
                    <GameCard  
                        key={`card-${card.game}`} 
                        game={card.game}
                        img={card.img}
                        viewers={card.viewers}
                        new={card.new}/>
                )
            })}
        </main>
    )
}