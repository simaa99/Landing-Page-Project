import React, { Component } from 'react'
import MenuCardComponent from '../../components/MenuCardComponent'
import Container from '../../components/ContainerComponent'
import menuData from '../../mock/menuData'
import TitleComponent from '../../components/TitleComponent'
import './style.css'
export default class index extends Component {
  render() {
    return (
        <div className='menu-section'>
        <Container width={80}> 
         <TitleComponent
         title="Straight From Kitchen"
        subtitle="Our Menu"
        isCenter={true}
        isReverse={false}
      />
        <div className='menu-item'>    
        {menuData.map((item) => (
          <MenuCardComponent
            key={item.id}
            titleCard={item.titleCard}
            descriptionCard={item.descriptionCard}
            price={item.price}
            imageCardMenu={item.imageCardMenu}
            imageAltCard="Card Image"
          />
        ))}
        </div>  
       </Container>
       </div>
    )
  }
}
