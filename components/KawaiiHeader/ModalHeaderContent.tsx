import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import { PosMeMuero } from '@components/SVGIcons'

const ModalHeaderContent = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column width="5">
            <PosMeMuero size="154px"></PosMeMuero>
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">Mataste al aguacatito</Header>
            <p> Lo tocaste tanto que lo mataste :C</p>
            <p>
              Por otro lado, eres una persona muy curiosa, y has descubierto
              esto C:
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <style>{`
      .container {
        padding: 2rem;
      }
      `}</style>
    </div>
  )
}

export default ModalHeaderContent
