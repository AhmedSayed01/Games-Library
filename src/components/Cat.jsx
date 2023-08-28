import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cat() {
  const [cats, setCats] = useState('');
  const fetchCat = async () => {
    const getCat = await axios.get(process.env.REACT_APP_API_GENRES_URL+"?"+process.env.REACT_APP_API_KEY);
    setCats(getCat.data.results);
  }
  useEffect(() => {
    fetchCat();
  }, [])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {cats && cats.map(cat => {
          return <div key={cat.id} style={{ borderRadius: '20px', backgroundColor: '#20202880', margin: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h2 style={{ color: '#ffffff', wordWrap: 'break-word', width: '400px', textAlign: 'center' }}><Link style={{textDecoration:'none', color:'#ffffff', fontSize:'1rem'}} to={`/thecat/${cat.slug}`}>{cat.name}</Link></h2>
            <img style={{ borderRadius: '20px', width: '25rem', height: '15rem', aspectRatio: '3/4' }} src={cat.image_background} alt="" />
          </div>
        })
        }
      </div>
    </>
  );
}

export default Cat