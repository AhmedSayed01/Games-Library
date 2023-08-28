import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import APIs from './APIs';
function Home() {
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchGames = async (pageNumber) => {
    // const games = await axios.get(process.env.REACT_APP_API_GAMES_URL + `?page=${pageNumber}&` + process.env.REACT_APP_API_KEY);
    // setItems(games.data.results);
    const games = await APIs.getGeneral(pageNumber);
    if (pageNumber === 1) {
      setItems(games.data.results);
    }
    else {
      setItems(items.concat(games.data.results));
    }
    setPageNumber(pageNumber + 1);
  }


  // const fetchNextPage = async () => {
  //   setPageNumber(pageNumber + 1);
  //   const nextGames = await axios.get(process.env.REACT_APP_API_GAMES_URL + `?page=${pageNumber}&` + process.env.REACT_APP_API_KEY);
  //   setItems(items.concat(nextGames.data.results));
  //   console.log(nextGames.data.results);
  // }
  const handleNav = (id) => {
    console.log(id);
    navigate(`/game/${id}`)

  }

  useEffect(() => {
    fetchGames(pageNumber);
  }, []);
  return (
    <div>
      {items && <InfiniteScroll style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}
        dataLength={items.length} //This is important field to render the next data
        next={() => fetchGames(pageNumber)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: 'center' }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        // below props only if you need pull down functionality

        pullDownToRefreshThreshold={50}
      // pullDownToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      // }
      // releaseToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      // }
      >
        {items.map(item => {
          return <div key={item.id} style={{ maxWidth: '100%', borderRadius: '20px', backgroundColor: '#20202880', margin: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h2 style={{ color: '#ffffff', wordWrap: 'break-word', width: 'auto', textAlign: 'center' }}><button style={{ textDecoration: 'none', color: '#ffffff', fontSize: '1rem' }} onClick={() => handleNav(item.id)}>{item.name}</button></h2>
            <img style={{ borderRadius: '20px', width: '25rem', height: '15rem', aspectRatio: '3/4' }} src={item.background_image} alt="" />
          </div>
        })
        }
      </InfiniteScroll>}
    </div>
  )
}

export default Home