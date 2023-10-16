//import React, { useState } from 'react'
//import { AppContext } from '../../App'


const Item = (props) => {

//const context = React.useContext(AppContext)

  return (
    <div className='container py-4'>
      <main>
        <div className='row cols-1 row-cols-md-3 row-cols-sm-2 justify-content-evenly text-center'>
          <div className='col px-1 py-1'>
            <div className='card bg-warning rounded'>
              <div className='card-header py-3 px-1'>
                                
              <h3>{props.title}</h3>
                <img className='rounded' src={props.img} width={'75%'} alt=''></img>
                <p>{props.description}</p>
                <h4>{props.price} ₽</h4>

              </div>
            </div>
          </div>
        </div>
      </main>  
    </div>
  )
}

export default Item