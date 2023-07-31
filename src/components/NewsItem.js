import React from 'react'

const NewsItem =(props)=> {
    let {title,description,url,imageUrl,author,date,article}=props;
    return (
        <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <div style={{display:'flex', justifyContent:'flex-end', right:0, position: 'absolute'}}>
              <span className="badge rounded-pill bg-danger" style={{display:"flex", justifyContent:'flex-end'}}>{article}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} rel="noreferrer" className="btn btn-sm btn-dark" target="_blank">Full Article</a>
          </div>
      </div>
      </div>
    )
}

export default NewsItem