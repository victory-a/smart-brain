import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style= {{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
      {/* function definition not function call so it runs only when clicked and not on every render */}
      </nav>
    );
  } else {
    return (
      <nav style= {{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
      </nav>
    );
  }
}

export default Navigation;