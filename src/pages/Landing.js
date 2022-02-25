import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/7.jpg'

const Landing = () => {
  return (
    <div>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src={img1} srcSet={img1} alt='Image one' />
        }
        itemTwo={
          <ReactCompareSliderImage src={img2} srcSet={img2} alt='Image two' />
        }
      />
    </div>
  )
}

export default Landing
