// @flow
import React from 'react'
import tw from 'tailwind.macro'

const NavContainer = tw.nav`
flex items-center justify-between flex-wrap bg-teal-500 p-6
`

const Brand = tw.div`
flex items-center flex-shrink-0 text-white mr-6
`
const BrandText = tw.span`
font-semibold text-xl tracking-tight
`

const Nav = () => {
  return (
    <NavContainer>
      <Brand>
        <BrandText>Relay Modern Feed</BrandText>
      </Brand>
    </NavContainer>
  )
}

export default Nav
