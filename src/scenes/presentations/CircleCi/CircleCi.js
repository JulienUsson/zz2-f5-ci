import React from 'react'
import theme from 'theme'
import Exercice from '../../exercices/CircleCi'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Circle CI</Heading>
      <Text textAlign="center" fit>
        C'est pas trop tôt...
      </Text>
    </Slide>
  </Deck>
)

export default {
  Presentation,
  Exercice,
}
