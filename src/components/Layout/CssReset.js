// @flow
import React from 'react'
import { Global, css } from '@emotion/core'

const CSSReset = () => (
  <Global
    styles={css`
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      html {
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
        box-sizing: border-box;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      html,
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }

    `}
  />
)

export default CSSReset
