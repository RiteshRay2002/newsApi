import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'
export default function NewsBoard({category}) {
   const [articles, setArticle]=useState([])
   useEffect(()=>{
    // let url=`https://jsonplaceholder.typicode.com/posts`
     axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6fbec3e6f3f64f2c9da5c3e6c0bc354c`)
     .then((res)=>res.data.articles)
     .then((data)=>setArticle(data))
     .catch((err)=>{
        console.log(err)
     })

   },[category])
       
  return (
    <div>
        <h2 className=''>Latest <span className='bg-danger badge'>New</span></h2>
        { articles.map((news,index)=>{
      return   <NewsItem  key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} /> })}
    </div>
  )
}
