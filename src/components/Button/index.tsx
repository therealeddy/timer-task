import React from 'react'

import { ButtonContainer, ButtonVariant } from './styles'

interface Props {
  variant?: ButtonVariant
}

const Button: React.FC<Props> = ({ variant = 'primary' }) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}

export default Button
