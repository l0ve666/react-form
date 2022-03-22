import React from 'react'
const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

const containerClick = () => {
    const change = document.querySelector(`.container`);
    change.classList.toggle(`active`)
    console.log(change);
}

export default containerClick
