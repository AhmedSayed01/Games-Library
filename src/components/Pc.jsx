import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


const Pc = () => {
    const [items, setItems] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const fetchPC = async () => {
        const pcgames = await axios.get(process.env.REACT_APP_API_PC + `page=${pageNumber}&` + process.env.REACT_APP_API_KEY);
        setItems(pcgames.data.results);
    }
    const fetchNextPC = async () =>{
        setPageNumber(pageNumber+1);
        const nextpcgames = await axios.get(process.env.REACT_APP_API_PC + `page=${pageNumber}&` + process.env.REACT_APP_API_KEY)
        setItems(items.concat(nextpcgames.data.results))
    }
    
    useEffect(() => {
        fetchPC();
        setPageNumber(pageNumber+1);
    }, [])


    return (
        <div >
           {items && <InfiniteScroll style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}
                dataLength={items.length} //This is important field to render the next data
                next={fetchNextPC}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                pullDownToRefreshThreshold={100}
            >
                {items && items.map(item => {
                    return <div key={item.id} style={{ maxWidth: '100%', borderRadius: '20px', backgroundColor: '#20202880', margin: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <h2 style={{ color: '#ffffff', wordWrap: 'break-word', width: 'auto', textAlign: 'center' }}><Link style={{ textDecoration: 'none', color: '#ffffff', fontSize: '1rem' }} to={`/game/${item.id}`}>{item.name}</Link></h2>
                        <img style={{ borderRadius: '20px', width: '25rem', height: '15rem', aspectRatio: '3/4' }} src={item.background_image} alt="" />
                    </div>
                })}
            </InfiniteScroll>}
        </div>
    )
}

export default Pc