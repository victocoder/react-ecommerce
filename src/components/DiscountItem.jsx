import React from 'react'
import MainTitle from './ui/MainTitle'

const DiscountItem = () => {
  return (
    <div >
      <MainTitle title="Discount Items" />

      <nav>
        <ul>
            <li><a href="">Wood Chair</a></li>
            <li><a href="">Plastic Chair</a></li>
            <li><a href="">Sofa Collection</a></li>

        </ul>
      </nav>
      <div>
        <div>
        <MainTitle title="20% Discount Of All Products" />
          <h2>Eams Sofa Compact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
          <ul>
            <li>Material expose like metals</li>
            <li>Simple neutral colours.</li>
          </ul>
          <ul>
            <li>Clear lines and geomatric figures</li>
            <li>Material expose like metals</li>
          </ul>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default DiscountItem
