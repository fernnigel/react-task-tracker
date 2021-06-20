import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = (props) => {

    // const clicked = ()=>{
    //     console.log('clicked');
    // }

  return (
    <header className="header">
     <h1>{props.title}</h1>
     <Button color={props.showAdd ? "red" : "green"} text={props.showAdd ? "Close" : "Add"} onClick={props.onAdd} />
    </header>
  )
};

Header.defaultProps = {
    title:"Task tracker",
}

Header.propTypes = {
    title: PropTypes.string,
}


//CSS in JS
// const headStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header;
