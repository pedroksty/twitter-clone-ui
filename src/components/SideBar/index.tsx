import React from 'react'

import List from '../List'
import FollowSuggetion from '../FollowSuggetion'

import {
  Container,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body
} from './styles'

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggetion
              name="pedro henrique"
              nickname="@pedroksty"
            />,
            <FollowSuggetion
              name="Cecilia Dantas"
              nickname="@dante1_"
            />,
            <FollowSuggetion
              name="Thaina Dantas"
              nickname="@taxCalonix"
            />
          ]}
        />

        <List
          title="Talvez você curta"
          elements={[
            <h1>Test</h1>,
            <h1>Test</h1>,
            <h1>Test</h1>
          ]}
        />

      </Body>
    </Container>
  )
}

export default SideBar
