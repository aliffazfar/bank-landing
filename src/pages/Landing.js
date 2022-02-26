import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

import { LandingContainer } from '../assets/styles/Landing.styles'

import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/7.jpg'

const Landing = () => {
  return (
    <LandingContainer>
      <div className='container'>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage srcSet={img1} alt='Image one' />}
          itemTwo={<ReactCompareSliderImage srcSet={img2} alt='Image two' />}
        />
      </div>
    </LandingContainer>
  )
}

export default Landing
