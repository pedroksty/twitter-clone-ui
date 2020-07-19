import React from 'react'

import ProfilePage from '../ProfilePage'

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, EmailIcon, BellIcon } from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Pedro Henrique</strong>
          <span>512 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>

    </Container>
  )
}

export default Main
