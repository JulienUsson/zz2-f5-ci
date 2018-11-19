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
import BasicImg from './basic.png'
import DockerVmImg from './dockerVsVm.jpg'
import WorkflowImg from './workflow.png'
import WorkspaceImg from './workspace.png'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Circle CI</Heading>
      <Text textAlign="center" fit>
        C'est pas trop tôt...
      </Text>
    </Slide>
    <Slide>
      <Image src={BasicImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={DockerVmImg} width="100%" />
    </Slide>
    <Slide>
      <Image src={WorkflowImg} height="620px" />
    </Slide>
    <Slide>
      <Image src={WorkspaceImg} height="620px" />
    </Slide>
  </Deck>
)

export default {
  Presentation,
  Exercice,
}
