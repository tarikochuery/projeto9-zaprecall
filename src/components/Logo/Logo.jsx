import React from 'react'
import { StyleLogo } from './style';
import logo from '../../assets/img/logo.png'

export const Logo = () => {
  return (
    <StyleLogo>
      <img src={logo}/>
      <h1>ZapRecall</h1>
    </StyleLogo>
  )
}
