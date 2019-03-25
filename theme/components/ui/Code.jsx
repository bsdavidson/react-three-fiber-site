import styled from '@emotion/styled'

// hacked together from https://github.com/pedronauck/docz-website

export const Code = styled('code')`
  margin: 0 3px;
  padding: 3px 5px;
  border-radius: 3px;
  background: ${p => p.theme.colors};
  font-size: 16px;
  color: ${p => p.theme.colors};
`
