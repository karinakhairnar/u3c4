import { Link } from 'react-router-dom';
import React from 'react';
export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#8000ff', padding: 20, color: 'white'}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/about'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/products'>Products</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/products/men'>Men</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/products/women'>Women</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/products/kids'>Kids</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/products/homedecor'>Home Decor</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    </nav>
  );
};
