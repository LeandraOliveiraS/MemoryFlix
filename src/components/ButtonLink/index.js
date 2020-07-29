import React from 'react';

function ButtonLink(props){
    // props => { } é usado para colocar o js dentro do html que está dentro do js.

    return(
        <a href= {props.href} className={props.className}>
            {props.children} 
        </a>
    );
}

export default ButtonLink;