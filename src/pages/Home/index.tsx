import React from 'react'

import { Play } from 'phosphor-react'
import { CountDown, FormContainer, HomeContainer, Separetor } from './styles'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="minutesAmount">durante</label>
          <input id="minutesAmount" type="number" />

          <span>minutos.</span>
        </FormContainer>

        <CountDown>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountDown>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}

export default Home
