import React from 'react'
import {Link} from 'react-router-dom'
import {Star} from '../styled'

import { StyledShowCard } from './showCardStyled';

 

function showCard({ id, image, name, summary,onStarClick}) {
  // summary we split with spaces  where every item is a word and then join the replace with regular exprssion to match the pattern
  const summaryAsText = summary
    ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
    : 'No description';

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={image} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className='btns'>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick ={onStarClick}> 
        <Star /></button>
      </div>
     </StyledShowCard>
  );
};

export default showCard