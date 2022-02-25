import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

import { LandingContainer } from '../styles/Landing.styles'

import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/7.jpg'

const Landing = () => {
  return (
    <ReactCompareSlider
      itemOne={
        <LandingContainer className='img'>
          <ReactCompareSliderImage
            src={img1}
            srcSet={img1}
            className='img'
            alt='Image one'
          />
        </LandingContainer>
      }
      itemTwo={
        <LandingContainer className='img'>
          <ReactCompareSliderImage
            src={img2}
            className='img'
            srcSet={img2}
            alt='Image two'
          />
        </LandingContainer>
      }
    />
  )
}

export default Landing
