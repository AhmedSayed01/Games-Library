import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollArea from '../../shared/scrollArea/scrollArea';


const Consoles = () => {

    const {state} = useLocation();
    const [stateId,setId] = useState(null)
    const navigate = useNavigate()

    // useAppSelector()
    

    useEffect(()=>{
        setPageNumber(1)
        if(state === null){
            const current = window.location.pathname.split("/")
            const id = current[1] === "pc" ? 1 : current[1] === "ps" ? 2 : 3
            fetchGames(id,pageNumber)
            setId(id)

        }
        else{
            fetchGames(state,pageNumber)
            setId(state)

        }
    },[state])
    
    const [items, setItems] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const fetchGames = async (id,pageNumber) => {
        const games = await axios.get(`${process.env.REACT_APP_API_CONSOLE}${id}&page=${pageNumber}&${process.env.REACT_APP_API_KEY}`);
        if (pageNumber === 1) {
          setItems(games.data.results);
        }
        else {
          setItems(items.concat(games.data.results));
        }
        setPageNumber(pageNumber + 1);
      }
    
      const handleNav = (id) => {
        navigate(`/game/${id}`)
    
      }

    return (
        <div>
          
           {items && <ScrollArea data={items} pageNumber={pageNumber} handleFetch={e => fetchGames(stateId,e)} handleNav={e => handleNav(e)}/>}
        </div>
    )
}

export default Consoles