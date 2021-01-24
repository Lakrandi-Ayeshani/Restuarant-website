import React from 'react'
import {FeatureContainer,Featurebutton,FeaturePrice} from './FeatureElements';

function Feature() {
    return (
      <FeatureContainer>
          <h1>Today Special </h1>
          <p>Chicken Kabsa with 2 sprite and vegi chopsi...</p>
          <FeaturePrice> Rs. 1400.00 only (4 person)</FeaturePrice>
          <Featurebutton>Order Today </Featurebutton>
      </FeatureContainer>
    )
}

export default Feature
