import { useEffect, useState } from "react";
import "./index.css"
import {PokemonCards} from "./PokemonCards.jsx";
import loader from "../public/loader.gif";
export const Pokemon = () => {

    const [pokemon , setpokemon] = useState([]);
    const [loading , setloading] = useState(true);
    const [search , setseacrch] = useState("");
    const API = "https://pokeapi.co/api/v2/pokemon?limit=600";

    const pokemondata = async() => {
        try {
            
            const res = await fetch(API);
        const data = await res.json();
        // console.log(data);

      const detaildpokemondata =  data.results.map(async(currElm) => {
            // console.log(currElm.url)
            const res = await fetch(currElm.url);
            const data = await res.json();
            // console.log(data)
            return data;
        })

        const detaildResponse = await Promise.all(detaildpokemondata);
        console.log(detaildResponse);
        setpokemon(detaildResponse);
        setloading(false)

        } catch (error) {
            console.log(error);
            setloading(false)
        }
    }

    useEffect(() => {
        pokemondata();
    },[]);

    // search functinality

const searchFeature = (value) => {
    setseacrch(value);
}

const SearchedData = pokemon.filter((currPokemon) => 
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
)


    if(loading){
        return(
            <>
            <div className="w-screen h-screen flex items-center justify-center flex-col">
                <img src={loader} alt="" className="loader"/>
                <h1 className="font-bold mb-4 text-2xl">Pokemon's Loading....</h1>
                <h1 className="font-bold mb-4 text-2xl"><span className="text-red-500">Shivam </span> BCA wala</h1>
            </div>
            </>
        );
    }
  
    document.title = "Pokemons";

    return(
        <>
        <section className="container w-full h-full ">
            <header className="title lg:text-xl">let's Catch Pokemon</header>
            <div className="mt-1 mb-1 text-center p-2">
                <input type="text" placeholder="Serach Pokrmon's" value={search} onChange={(e) =>  searchFeature(e.target.value)} className="border border-b-8 border-black p-2 rounded lg:w-96 text-gray-600 font-bold text-sm outline-none sm:w-72
                " />
            </div>
            <div className="ulparent ">
                <ul className="cards ">
                    {
                        // pokemon.map((Elm) => { 
                        SearchedData.map((Elm) => { // search feature implement karne ke baad...
                             return(
                                <>
                                <PokemonCards key={Elm.id} currElm={Elm}/>
                                </>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
        
        </>
    );
}