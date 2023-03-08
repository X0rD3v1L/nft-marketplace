import React, { useState } from 'react'
import { nftData } from '../../assets/nft-data';
import "./card-list.css"
import Card from './card/card';
function CardList() {
  const [cardActive, setCardActive] = useState(false);

  const checkIsCardActive = (isCardActive) => {
    setCardActive(isCardActive);
  }
  const HideStyles = { pointerEvents: "none", overflow: "hidden !important" };

  return (
    <div className='card-list' style={cardActive ? HideStyles : null}>
      {nftData.map((data, index) => {
        return (<Card data={data} key={index} checkIsCardActive={checkIsCardActive} />)
      })}
    </div>

  )
}

export default CardList;