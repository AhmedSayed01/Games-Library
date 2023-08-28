import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
const TheCat = () => {
  const paramValue = useParams();
  const [genres, setGenres] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const fetchGenre = async () => {
    const genreData = await axios.get(process.env.REACT_APP_API_GAMES_URL + `?genres=${paramValue.id}&page=${pageNumber}&` + process.env.REACT_APP_API_KEY);
    setGenres(genreData.data.results);
  }
  const fetchNextPage = async () => {
    setPageNumber(pageNumber+1);
    const nextGenreData = await axios.get(process.env.REACT_APP_API_GAMES_URL + `?genres=${paramValue.id}&page=${pageNumber}&` + process.env.REACT_APP_API_KEY);
    setGenres(genres.concat(nextGenreData.data.results));
  }
  
  useEffect(() => {
    fetchGenre();
    setPageNumber(pageNumber+1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {genres && <InfiniteScroll style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}
        dataLength={genres.length} //This is important field to render the next data
        next={fetchNextPage}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        pullDownToRefreshThreshold={100}
      >
        {genres && genres.map(genre => {
          return <div key={genre.id} style={{ maxWidth: '100%', borderRadius: '20px', backgroundColor: '#20202880', margin: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h2 style={{ color: '#ffffff', wordWrap: 'break-word', width: 'auto', textAlign: 'center' }}><Link style={{ textDecoration: 'none', color: '#ffffff', fontSize: '1rem' }} to={`/game/${genre.id}`}>{genre.name}</Link></h2>
            <img style={{ borderRadius: '20px', width: '25rem', height: '15rem', aspectRatio: '3/4' }} src={genre.background_image} alt="" />
          </div>
        })}
      </InfiniteScroll>}
    </div>
  )
}

export default TheCat