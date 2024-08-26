import React from 'react'
import { Audio } from 'react-loader-spinner'
const ButtonLoader = () => {
    return (
        <Audio
            height="60"
            width="60"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
    )
}

export default ButtonLoader