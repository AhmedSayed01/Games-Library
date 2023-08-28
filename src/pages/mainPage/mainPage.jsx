import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import APIs from '../../components/APIs';
import ScrollArea from '../../shared/scrollArea/scrollArea';
// import { useDispatch } from 'react-redux';
// import ActionTypes from '../../shared/reducers/actionTypes';
// import { useSelector } from "react-redux"
const MainPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // const number = useSelector((state) => state.count)

  const fetchGames = async (pageNumber) => {
    const games = await APIs.getGeneral(pageNumber);
    if (pageNumber === 1) {
      setItems(games.data.results);
    }
    else {
      setItems(items.concat(games.data.results));
    }
    setPageNumber(pageNumber + 1);
  }

  // useEffect(()=>{console.log(number)},[number])

  
const handleNav = (id) => {
    console.log(id);
    navigate(`/game/${id}`)

  }
  useEffect(() => {
    fetchGames(pageNumber);
  }, []);
  return (
    <div>
      {items && <ScrollArea data={items} pageNumber={pageNumber} handleFetch={e => fetchGames(e)} handleNav={e => handleNav(e)}/>}
    </div>
  )
}

export default MainPage