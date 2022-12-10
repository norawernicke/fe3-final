import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='powered'>
          <p>Powered By</p>
          <img src="/images/DH.png" alt='DigitalHouse-logo' />
        </div>
        <div className='redes'>
          <img src="images/ico-instagram.png" alt='Logo de instagram' className='icono'/>
          <img src="images/ico-facebook.png" alt='Logo de facebook' className='icono'/>
          <img src="images/ico-tiktok.png" alt='Logo de tiktok' className='icono'/>
        </div>
    </footer>
  )
}

export default Footer
