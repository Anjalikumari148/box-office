/* eslint-disable import/named */
import React from 'react'
import IMG_PLACEHOLDER from '../../image/images.png'

import { Star } from '../styled';
import {MainDataWrapper} from './ShowMainDataStyled'



function showMainData({ name, rating, summary, tags, image }) {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            <span>{rating.average || 'N/A'}</span>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Tags:{' '}
          <div>
            {tags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </MainDataWrapper>
  );
};



export default showMainData