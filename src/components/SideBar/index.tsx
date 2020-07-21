import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggetion from '../FollowSuggetion'
import News from '../News'

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

      <StickyBox>

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
              <News />,
              <News />,
              <News />
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />

        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar
