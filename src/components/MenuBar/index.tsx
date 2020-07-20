import React from 'react'

import Button from '../Button'

import { Container, Botside, ExitIcon, Avatar, ProfileData, BellIcon, EmailIcon, FavoriteIcon, HomeIcon, ProfileIcon, MenuButton, Logo, TopSide } from './styles'

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active" >
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button >
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Pedro Henrique</strong>
          <span>@pedroksty</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  )
}

export default MenuBar
