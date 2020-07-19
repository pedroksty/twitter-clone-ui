import React from 'react'

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Pedro henrique</strong>
            <span>Pedro henrique</span>
            <Dot />
            <time>19 de set</time>
          </Header>

          <Description>
            Foguete não tem ré
          </Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              45
            </Status>
            <Status>
              <LikeIcon />
              99
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet
