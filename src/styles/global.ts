import * as styled from 'styled-components'

export const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme['base-text']};
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
