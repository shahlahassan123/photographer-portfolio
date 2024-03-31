import * as React from 'react'
import Nav from './Nav'
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import axios from "axios"
// import {portfolio} from "./client/portfolioData"


// type portfolioType = string[]
const portfolio  = [
  "/photos/DSC_3997.JPG",
  "/photos/DSC_0871.JPG",
  "/photos/DSC_0885.JPG",
  "/photos/DSC_0898.JPG",
  "/photos/DSC_0912.JPG",
  "/photos/DSC_1234.JPG",
  "/photos/DSC_1311.JPG",
  "/photos/DSC_1444.JPG",
  "/photos/DSC_1561.JPG",
  "/photos/DSC_1912.JPG",
  "/photos/DSC_3982.JPG",
  "/photos/DSC_3937.JPG",
  "/photos/DSC_4024.JPG",
  "/photos/DSC_4047.JPG",
  "/photos/RBK_9085.JPG",
  "/photos/RBK_7667.JPG",
  "/photos/RBK_7546.JPG",
  "/photos/RBK_7396.JPG",
  "/photos/RBK_0710.JPG",
  "/photos/RBK_9888.JPG",
  "/photos/RBK_9827.JPG",
  "/photos/RBK_9589.JPG",
  "/photos/RBK_9508.JPG",
  "/photos/DSC_8853.JPG",
  "/photos/DSC_8416.JPG",
  "/photos/DSC_8250.JPG",
  "/photos/DSC_8244.JPG",
  "/photos/DSC_6295.jpeg",
  "/photos/DSC_6060.jpeg",
  "/photos/DSC_5973.jpeg",
  "/photos/DSC_5970.jpeg",
  "/photos/DSC_5914.jpeg",
  "/photos/DSC_5854.jpeg",
  "/photos/DSC_5628.jpeg",
  "/photos/DSC_5556.jpeg",
  "/photos/DSC_5519.jpeg",
  "/photos/DSC_5433.JPG",
  "/photos/DSC_5349.JPG",
  "/photos/DSC_5289.JPG",
  "/photos/DSC_3411.JPG",
  "/photos/RBK_7680.JPG",
  // "/photos/DSC_2166.JPG",




]


const Portfolio = () => {

  return (
    <div className='App'>
     <Nav />
    <div className='main'>
      {portfolio.map((photo , index )=>{
        return(
        <img
            key={index}
            src={photo} 
       
            loading="lazy"
            className={`portfolioItem portfolioItem-${index+1}`}
            alt={`Portfolio item ${index+1}`}
          />
        )
      })}
    </div>
    </div>
   
  )

  
}

export default Portfolio
