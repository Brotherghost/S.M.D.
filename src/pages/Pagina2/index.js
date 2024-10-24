import React from 'react';
import { Platform } from 'react-native';

import { 
  Background, 
  Container, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText
} from '../Pagina1/styles';

export default function Pagina2(){
  return(
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <AreaInput>
          <Input
            placeholder="Nome"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu email"
          />
        </AreaInput>

        <AreaInput>
          <Input
          type="password"
            placeholder="Sua senha"
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>

    </Background>
  )
}