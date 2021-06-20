import React from "react";
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) => {

  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "button",
  onClick:function(){
      console.log('default')
  },
};

Button.propTypes ={
    color:PropTypes.string,
    title:PropTypes.string,
    onclick:PropTypes.func
}

export default Button;
