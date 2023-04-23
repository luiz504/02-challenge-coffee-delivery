import styled from 'styled-components'

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
  }
  .row-1 {
    input {
      width: 200px;
    }
  }
  .row-2 {
    input {
      width: 100%;
    }
  }
  .row-3 {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  .row-4 {
    display: grid;
    grid-template-columns: 200px 1fr 60px;
  }
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 4px;
  background-color: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
  padding: 0.7rem 0.75rem;
  font-size: 0.875rem;
  line-height: 130%;

  &::placeholder {
  }
`
