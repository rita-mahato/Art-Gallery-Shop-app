import React from 'react'
import './LatestPainting.css'
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Art from '../Images/img_1.png';

export const LatestPainting = () => {
  return (
    <div className='subpage'>
        <div className="subpage-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hand-icon">
                <p>new</p>
                <WavingHandOutlinedIcon></WavingHandOutlinedIcon>
                {/* <img src={WavingHandOutlinedIcon} alt="" /> */}
            </div>
            <p>Collections</p>
            <p>for everyone</p>
          </div>
          <div className="latest-btn">
            <div>Latest Collection</div>
            <ArrowForwardOutlinedIcon></ArrowForwardOutlinedIcon>
            {/* <img src={ArrowForwardOutlinedIcon} alt="" /> */}
          </div>
        </div>
        <div className="subpage-right">

          <img src={Art} alt="" style={{ width: '300px', height: 'auto' }} />
        </div>
    </div>
  )
}
