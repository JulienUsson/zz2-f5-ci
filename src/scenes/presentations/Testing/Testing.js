import React from 'react'
import theme from 'theme'
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
import Exercice from '../../exercices/Testing'
import eslintImg from './eslint.png'
import unitImg from './unit.png'
import integrationImg from './integration.png'
import e2eImg from './e2e.png'

const Presentation = () => (
  <Deck theme={theme}>
    <Slide>
      <Heading fit>Les tests</Heading>
      <Text textAlign="center" fit>
        Tester, c'est douter
      </Text>
    </Slide>
    <Slide>
      <Heading fit>Tester c'est quoi?</Heading>
    </Slide>
    <Slide>
      <List>
        <ListItem>Static analysis / Linting</ListItem>
        <ListItem>Unit testing</ListItem>
        <ListItem>Integration testing</ListItem>
        <ListItem>End-to-End testing / e2e testing</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size="4">Static analysis / Linter</Heading>
      <List>
        <ListItem>Analyse du code sans l'exécuter</ListItem>
        <ListItem>On va tester des erreurs dans le code :</ListItem>
        <List>
          <ListItem>Variable non utilisée</ListItem>
          <ListItem>Un "if" inutile</ListItem>
          <ListItem>...</ListItem>
        </List>
        <ListItem>Intégré aux IDEs pour un feedback immédiat</ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={eslintImg} width="100%" />
    </Slide>
    <Slide>
      <Heading size="4">Unit testing</Heading>
      <List>
        <ListItem>Test d'une portion ou unité d'une application</ListItem>
        <ListItem>On va tester les fonctions de manière isolées</ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={unitImg} width="100%" />
    </Slide>
    <Slide>
      <Heading size="4">Integration testing</Heading>
      <List>
        <ListItem>Test d'une fonctionnalité</ListItem>
        <ListItem>On va tester une route</ListItem>
        <ListItem>
          On va tester l'intéraction entre plusieurs fonctions
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={integrationImg} width="100%" />
    </Slide>
    <Slide>
      <Heading size="4">End-to-End testing</Heading>
      <List>
        <ListItem>Test de l'interface</ListItem>
        <ListItem>On va simuler des scénarios utilisateur</ListItem>
        <ListItem>
          Les tests vont cliquer, saisir, scroller dans la page
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Image src={e2eImg} width="100%" />
    </Slide>
  </Deck>
)

export default {
  Presentation,
  Exercice,
}
