
import Head from 'next/head'
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [name]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Pokemon App</title>

      </Head>
      <main className={styles.main}>
        <div>
          <h1>{pokemonData.name}</h1>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      </main>
    </>
  )
}

