import './AdLine.css'
import GoogleAds from '../assets/GoogleAds.png'
import TikTokAds from '../assets/TikTokAds.png'
import LinkedinAds from '../assets/LinkedinAds.png'
import MetaAds from '../assets/MetaAds.png'

const AdLine = () => {
  return (
    <div>
        <ul className='ad-line'>
            <li><img src={GoogleAds}/></li>
            <li><img src={TikTokAds}/></li>
            <li><img src={LinkedinAds}/></li>
            <li><img src={MetaAds}/></li>
        </ul>
    </div>
  )
}

export default AdLine