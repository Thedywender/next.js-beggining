import React from 'react';
import Image from "next/image";
import "../../styles/about.css";
import Link from "next/link";

async function getData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
    return response.json();
}

export default async function Pokemon() {
    const {results} = await getData();

    return (
        <main className="main">
            <div className="description">
                <h1>Pokemons</h1>
                <ul>
                    {results
                        ? results.map((pokemon) => (
                            <React.Fragment key={pokemon.name}>
                                <li>{pokemon.name}</li>
                                <li>{pokemon.url}</li>
                            </React.Fragment>
                        ))
                        : <p>Loading...</p>
                    }
                </ul>
            </div>
            <div>
                <Link href="/"><button className="button">HOME</button></Link>
                <Link href="/pokemon"><button className="button">Pokemon</button></Link>
                <Link href="/products/id"><button className="button">Products</button></Link>
                <Link href="/vestuario/feminino"><button className="button">Vestuario_Feminino</button></Link>
                <Link href="/vestuario/masculino"><button className="button">Vestuario_Masculino</button></Link>
      </div>
        </main>
    );
}
