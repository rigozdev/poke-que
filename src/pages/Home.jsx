import React, { useEffect, useState } from 'react'

export default function Home() {

    const [imgHome, setImgHome] = useState([]);

    const obtieneDatos = async () => {
        try {
            const peticion = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
            const data = await peticion.json();
            console.log(data);
            setImgHome(imgHome)
        } catch (error) {
        }
    }

    useEffect(() => {
        obtieneDatos();
    }, []);

    return (
        <>
            <div className="home-container">
                <h1>¡Bienvenido </h1>
                <h1>maestro pokemón!</h1>
                <p className="parrafo-home">En 'Pokemones' puedes seleccionar uno de los muchos pokemones y saber un poco más acerca de sus estadísticas 😲</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" alt="" />
            </div>
        </>
    )
}