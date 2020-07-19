import React from 'react'

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage } from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined >Editar Perfil</EditButton> */}
        <h1>Pedro Henrique</h1>
        <h2>@pedroksty</h2>

        <p>
          Developer at <a href="https://github.com">@Github</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio Grande do Norte, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de setembro de 1999
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>431</strong>
          </span>
          <strong>789 </strong> seguidores
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage
