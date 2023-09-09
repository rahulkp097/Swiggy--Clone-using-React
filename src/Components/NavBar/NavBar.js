import React from 'react'

function navbar() {
  return (
    <div className='Header'>
        <img className='logo' src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?w=900&t=st=1692939837~exp=1692940437~hmac=56769b77d6dc2dd528082d27836e0426576e2bcda190987a069568e28844867a" alt="logo" />
      <h1>FoodVilla</h1>
       <div className='NavItems'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      </div>
      
    </div>
  )
}

export default navbar
