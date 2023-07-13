import React from "react";
import style from './inputcontrol.module.css'

function InputControl ({label, ...props}) {
    return (
        <div className={style.container}>
            {label && <label>{label}</label>}
            <input type="text" {...props}/>
        </div>
    )
}

export default InputControl;