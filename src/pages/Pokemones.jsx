import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pokemones() {

    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState('');

    const navigate = useNavigate();

    const getInfo = async () => {
        try {
            const peticion = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=2000");
            const datos = await peticion.json();
            const data = datos.results;
            setPokemon(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getInfo();
    }, []);

    const clickRedirect = (id) => {
        navigate(`/pokemones/${id}`);
    }

    return (
        <>
            <div className="home-container">
                <h2>Selecciona un pokemon</h2>
                <select name="pokemones" id="pokemones" onChange={e => setSelectedPokemon(e.target.value)}>
                    <option value="">Seleccione un pokemon</option>
                    {pokemon.map(item => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
                <br />
                
                {selectedPokemon === '' ?
                    (<button onClick={() => clickRedirect(selectedPokemon)} disabled>Detalles</button>) :
                    (<button onClick={() => clickRedirect(selectedPokemon)}>Detalles</button>)
                }
            </div>
        </>
    )
}