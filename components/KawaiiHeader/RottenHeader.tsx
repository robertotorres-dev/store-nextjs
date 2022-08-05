import React from 'react'
import { Header } from 'semantic-ui-react'

import { PosMeMuero } from '@components/SVGIcons'

const RootenHeader = () => (
  <Header size="huge" as="h1">
    Platzi
    <PosMeMuero size="58px"></PosMeMuero>
    Avo
  </Header>
)

export default RootenHeader
