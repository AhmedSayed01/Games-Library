import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"

// interface IScrollArea{
//     data?:[];
//     pageNumber:number;
//     handleFetch:function;

// }

const ScrollArea = (props) => {

    return <InfiniteScroll style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}
    dataLength={props.data.length} //This is important field to render the next data
    next={() => props.handleFetch(props.pageNumber)}
    hasMore={true}
    loader={<h4>Loading...</h4>}
   
    pullDownToRefreshThreshold={50}
 
  >
    {props.data.map(item => {
      return <div key={item.id} style={{ maxWidth: '100%', borderRadius: '20px', backgroundColor: '#20202880', margin: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h2 style={{ color: '#ffffff', wordWrap: 'break-word', width: 'auto', textAlign: 'center' }}><button style={{color: '#ffffff', fontSize: '1.2rem', backgroundColor:'transparent', border:'0',cursor:'pointer' }} onClick={() => props.handleNav(item.id)}>{item.name}</button></h2>
        <img style={{ borderRadius: '20px', width: '25rem', height: '15rem', aspectRatio: '3/4' }} src={item.background_image} alt="" />
      </div>
    })
    }
  </InfiniteScroll>
}

export default ScrollArea