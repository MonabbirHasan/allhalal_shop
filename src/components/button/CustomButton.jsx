import React, { useState } from 'react'
import "./custom_button.css"
const CustomButton = (props) => {
    return (
        <div className='custom_button_components'>
            <button
                title={props.title}
                id='custom_button'
                onDoubleClick={props.onDoubleClick}
                onMouseEnter={props.onMouseEnter}
                onMouseLeave={props.onMouseLeave}
                onMouseMove={props.onMouseMove}
                onMouseDown={props.onMouseDown}
                onMouseOut={props.onMouseOut}
                onMouseUp={props.onMouseUp}
                onClick={props.onClick}
                onCopy={props.onCopy}
                style={{
                    margin: props.margin,
                    border: props.border,
                    color: props.textColor,
                    padding: props.padding,
                    borderTop: props.borderTop,
                    boxShadow: props.boxShadow,
                    borderLeft: props.borderLeft,
                    fontWeight: props.fontWeight,
                    borderRight: props.borderRight,
                    borderBottom: props.borderBottom,
                    borderRadius: props.borderRadius,
                    textTransform: props.textTransform,
                    backgroundColor: props.backgroundColor,
                    background: `linear-gradient(${props.linear})`,
                    borderTopLeftRadius: props.borderTopLeftRadius,
                    borderTopRightRadius: props.borderTopRightRadius,
                    borderBottomLeftRadius: props.borderBottomLeftRadius,
                    borderBottomRightRadius: props.borderBottomRightRadius,
                }}
            >{props.buttonTitle}</button>
        </div>
    )
}

export default CustomButton