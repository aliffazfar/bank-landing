import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

import { LandingContainer } from '../styles/Landing.styles'

import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/7.jpg'

const Landing = () => {
  return (
    <div className='container page'>
      <ReactCompareSlider
        itemOne={
          <LandingContainer>
            <ReactCompareSliderImage srcSet={img1} alt='Image one' />
          </LandingContainer>
        }
        itemTwo={
          <LandingContainer>
            <ReactCompareSliderImage srcSet={img2} alt='Image two' />
          </LandingContainer>
        }
      />
    </div>
  )
}

export default Landing
