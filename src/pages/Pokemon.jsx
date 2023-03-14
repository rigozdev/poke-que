import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 1250));

export default function Pokemon() {


    const params = useParams();


    const [infoPoke, setInfoPoke] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPokemonData = async () => {
        await fakePromise();
        try {
            const peticionPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
            const datoPokemon = await peticionPokemon.json();
            setInfoPoke(datoPokemon);

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPokemonData();
    }, []);

    return (
        <>
            {loading ?
                (<>
                    <div className="loading-container">
                        <p>Loading ...</p>
                    </div>

                </>) : (
                    <>
                        <div className="general-pokemon-container">
                            <div className="img-poke-container">
                                <h1>{infoPoke.name.charAt(0).toUpperCase() + infoPoke.name.slice(1)}</h1>
                                <img src={`${infoPoke.sprites.other.dream_world.front_default}`} alt=""></img>
                            </div>

                            <div className="details-poke-container">
                                <ul className="list-detail-poke">
                                    <li><b>Type</b>: {infoPoke.types[0].type.name.charAt(0).toUpperCase() + infoPoke.types[0].type.name.slice(1)}</li>
                                    <li><b>{infoPoke.stats[0].stat.name.charAt(0).toUpperCase() + infoPoke.stats[0].stat.name.slice(1)}</b>: {infoPoke.stats[0].base_stat}</li>
                                    <li><b>{infoPoke.stats[1].stat.name.charAt(0).toUpperCase() + infoPoke.stats[1].stat.name.slice(1)}</b>: {infoPoke.stats[1].base_stat}</li>
                                    <li><b>{infoPoke.stats[2].stat.name.charAt(0).toUpperCase() + infoPoke.stats[2].stat.name.slice(1)}</b>: {infoPoke.stats[2].base_stat}</li>
                                    <li><b>{infoPoke.stats[3].stat.name.charAt(0).toUpperCase() + infoPoke.stats[3].stat.name.slice(1)}</b>: {infoPoke.stats[3].base_stat}</li>
                                    <li><b>{infoPoke.stats[4].stat.name.charAt(0).toUpperCase() + infoPoke.stats[4].stat.name.slice(1)}</b>: {infoPoke.stats[4].base_stat}</li>
                                </ul>
                            </div>
                        </div>

                    </>)}
        </>
    )
};
