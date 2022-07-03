import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'

function Movieslist() {
  const [moviedetails,handleMovielist]=useState([])
  
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(res=>{
      console.log(res)
      handleMovielist(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  [])

  return(
    <div className='display'>
      { moviedetails.map(value=> {
        return(
        <div className='individualpost'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={value.thumbnailUrl}/>
          
          <Card.Body>
            <Card.Title> {value.title} </Card.Title>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroupItem><b>Rank:</b> {value.id} </ListGroupItem>
          </ListGroup>

          <Card.Body>
            <Card.Link href={value.url}>View Full Image</Card.Link>
          </Card.Body>

        </Card>
        </div>
        )}
      )}
    </div>
  )
}
export default Movieslist;