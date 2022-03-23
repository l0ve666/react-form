import React from 'react'

const containerClick = () => {
    const change = document.querySelector(`.container`);
    change.classList.toggle(`active`)
    console.log(change);
}

export default containerClick
