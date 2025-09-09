import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/esm/Badge'
import NewsList from './NewsList';

const News = ({categories}) => {
  
    
    const[articles,setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categories}&apiKey=${process.env.REACT_APP_API_KEY}`;

        fetch(url)//js predefined function to request url
        .then(response => response.json())//to convert the data fro url to json fromate
        .then(data => setArticles(data.articles))
        .then(err => console.error("Error in Fetching:",err))


    }, [categories])
    
  return (
    <div >
        <h2 className='text-center mt-3'>Latest <Badge bg='danger'> News</Badge></h2>
      {/* Mao function ti pass all my data in an array */}
      {/* articles  */}
      {articles.map((news,index)=>{
        return <NewsList key={index}
        title={news.title}
        description={news.description}
        src={news.urlToImage}
        url={news.url}


        />
      })}
    </div>
  )
}

export default News
