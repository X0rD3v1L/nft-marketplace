import React, {useState} from 'react';
import placeholder from "./placeholder.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./card.css"
import Modal from '../modal/modal';

function Card({data, checkIsCardActive}) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
    checkIsCardActive(true);
  }
  const closeModal = () => {
    checkIsCardActive(false);
    setShow(false);
  };
  return (
    <>
    <div className='card-container' onClick={handleClick}>
         <LazyLoadImage
          className="nft-image"
          alt="nft-logo-image"
          src={data.coverUrl}
          placeholderSrc={placeholder} 
          effect={"blur"}
          />
        <h2 className='nft-title'>{data.title}</h2>
        <p>{`Price ${data.amount} ${data.currency}`}</p>
    </div>
    {show && <Modal closeModal={closeModal} data={data}/>}
    </>

  )
}

export default Card;