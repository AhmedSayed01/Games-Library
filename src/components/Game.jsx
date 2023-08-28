import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css';

function Game() {

    const [games, setGames] = useState('');
    const { id } = useParams();
    const fetchGame = async () => {
        const fetchTheGame = await axios.get(process.env.REACT_APP_API_GAMES_URL + `/${id}?page_size=10&` + process.env.REACT_APP_API_KEY);
        setGames(fetchTheGame.data);
    }
    useEffect(() => {
        fetchGame();
        // console.log(env.API_URL_NO_KEY + "/" + paramValue.id + env.API_KEY);
        // console.log(env.REACT_APP_API_URL);
        console.log(games);
    }, [])

    return (

        <div style={{ minHeight: '100vh', justifyContent: 'space-around' }}>
            <br />
            <br />
            <br />
            <h1 style={{ marginTop: '4rem', color: '#ffffff', margin: '0 auto' }}>{games.name}</h1>
            <br />
            <hr style={{ width: '50%', marginBottom: '0', position: 'absolute' }} />
            <br />
            <br />
            <section style={{ marginTop: '0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {/* <hr style={{ margin: '0' }} /> */}
                <section style={{ margin: '0 auto' }}>
                    <p style={{ paddingTop: '2rem', fontSize: '1rem', color: '#ffffff', maxWidth: '55rem' }}>{games.description_raw}</p>
                    <p style={{ paddingTop: '2rem', marginTop: '3rem', fontSize: '1.3rem', color: '#ffffff' }}>Released : {games.released}</p>
                </section>
                <section style={{ margin: '2.6rem auto' }}>
                    <img src={games.background_image} alt="" />
                    <br />
                    <img style={{ marginTop: '2rem' }} src={games.background_image_additional} alt="" />
                </section>
            </section>
            {/* <hr style={{ width: '99.9%', marginTop: '0' }} /> */}
        </div>
    )
}

export default Game