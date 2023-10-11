import React from 'react'
import './Preloader.css'

const Preloader = ({isVisible, isCentered, isAfloat}) => {
  return (
    <>
      {isVisible && (
        <div className={
          `preloader 
            ${isCentered
            ? 'preloader_centered'
            : {isAfloat}
              ? 'preloader_afloat'
              : ''
          }`
        }>
          <div className={'preloader__container'}>
            <span className={'preloader__round'}></span>
          </div>
        </div>
      )}
    </>
  )
};

export default Preloader
