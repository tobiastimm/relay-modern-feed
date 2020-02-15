// @flow
import React from 'react'
import tw from 'tailwind.macro'
import CSSReset from './CssReset'
import Nav from '../Nav/Nav'

const Container = tw.div`flex flex-wrap`

const Column = tw.div`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6`

type LayoutProps = {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav></Nav>
      <CSSReset></CSSReset>
      <Container>
        <Column></Column>
        <Column>{children}</Column>
        <Column></Column>
      </Container>
    </>
  )
}

export default Layout
