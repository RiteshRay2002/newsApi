import React from 'react'
import image from  '../assets/news.png'

function NewsItem({title, description, src , url}) {
  return (
    <section className="card container d-inline-block 	width: 25% mb-4 mx-3 my-3 px-2 py-2  " style={{ maxWidth: 320 }}>
  <img src={src?src:image} style={{ height:"200px" , width:"325px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title">{title.slice(0,50)}</h4>
    <p className="card-text">
    {description ? description.slice(0,50) : "You can also search with keywords. Articles are sorted by the earliest date published firscd "}
    </p>
    <a href={ url} className="btn-solid theme-primary">
    Read more
    </a>
  </div>
</section>

  )
}

export default NewsItem
