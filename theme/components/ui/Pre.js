import '../../styles/prism-theme'

import 'prismjs'
import 'prismjs/components/prism-json.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-bash.min'
import 'prismjs/components/prism-markdown.min'
import 'prismjs/components/prism-typescript.min'

import React, { PureComponent } from 'react'
import prism from 'prismjs'
import { cx } from 'emotion'
import styled from '@emotion/styled'

// hacked together from https://github.com/pedronauck/docz-website

const PreStyled = styled('pre')`
  ${p => p.theme.styles};
`

export class Pre extends PureComponent {

  render() {
    const { children } = this.props
    const hasChildren = children && children.props
    const childrenProps = hasChildren && children.props.props
    const childrenClassName = childrenProps && childrenProps.className

    const className = cx('react-prism', this.props.className, childrenClassName)

    return (
      <PreStyled innerRef={ref => (this.el = ref)} className={className}>
        {hasChildren ? children.props.children : children}
      </PreStyled>
    )
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    prism.highlightElement(this.el)
  }
}
