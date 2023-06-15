import React from 'react';
import './main.css'; 
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

import img1 from '../../Assets/1.jpg';
import img2 from '../../Assets/2.jpg';
import img3 from '../../Assets/3.jpg';
import img4 from '../../Assets/4.jpg';
import img5 from '../../Assets/5.jpg';
import img6 from '../../Assets/6.jpg';
import img7 from '../../Assets/7.jpg';
import img8 from '../../Assets/8.jpg';
import img9 from '../../Assets/9.jpg';


const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Chicago',
    location: 'USA',
    grade: 'METRO',
    fees: '$1000',
    description: "London is the capital city of the United Kingdom. It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre."
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Paris',
    location: 'France',
    grade: 'METRO',
    fees: '950',
    description: "Paris is the capital city of France. It is also fashion capital of the world and have great museums."
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Goa',
    location: 'India',
    grade: 'METRO',
    fees: '700',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum tempora ipsam totam repellat ex adipisci illo dolorem nobis molestias!"
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'New York City',
    location: 'USA',
    grade: 'METRO',
    fees: '800',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum tempora ipsam totam repellat ex adipisci illo dolorem nobis molestias!"
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Zurich',
    location: 'Switzerland',
    grade: 'METRO',
    fees: '1300',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum tempora ipsam totam repellat ex adipisci illo dolorem nobis molestias!"
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Rome',
    location: 'Italy',
    grade: 'METRO',
    fees: '1100',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum tempora ipsam totam repellat ex adipisci illo dolorem nobis molestias!"
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'San Francisco',
    location: 'USA',
    grade: 'METRO',
    fees: '1400',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum tempora ipsam totam repellat ex adipisci illo dolorem nobis molestias!"
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Singapore',
    location: 'Singapore',
    grade: 'METRO',
    fees: '1200',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum tempora ipsam totam repellat ex adipisci illo dolorem nobis molestias!"
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Athens',
    location: 'Greece',
    grade: 'METRO',
    fees: '800',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsum tempora ipsam totam repellat ex adipisci illo dolorem nobis molestias!"
  }

]

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
         {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description })=>{
               return(
                <div key={id} className="singleDestination">
                  {/* { single img id will be returned here} */}

                  <div className="imageDiv">
                     <img src={imgSrc} className='img' alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">
                      {destTitle}
                    </h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon' />
                      <span className="name">{location}</span>
                    </span>
                    
                    <div className="fees flex">

                      <div className="grade">
                          {/* <span>{grade}<small className='small'>+1</small></span> */}
                          <span>{grade}</span>
                          <small className='small'>+1</small>
                      </div>

                      <div className="price">
                        <h5>${fees}</h5>
                      </div>

                    </div>
                      
                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck className='icon' />
                    </button>

                  </div>
                </div>
               )
          })
         }


      </div>
    </section>
  )
}



export default Main