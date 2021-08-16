import React from 'react';

export const DeleteIcon = (props) => {
    return (
<span className="delete" onClick={props.delete} id={props.id} type={props.type}>X</span>
    )
}