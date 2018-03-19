import PropTypes from 'prop-types'
import React from 'react'
const Header = ({massage}) =>{
    return(
        <h2 className="Header text-center">{massage}</h2>
    );
  };
  
  Header.propTypes={
    massage: PropTypes.string
  };    

  export default Header