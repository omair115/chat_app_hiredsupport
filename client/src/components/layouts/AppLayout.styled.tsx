import { theme } from "twin.macro";
import styled from 'styled-components'

export const PageLayoutWrapper = styled.div`

height: 100vh;
background-color: ${theme`colors.appBackground`};


@media screen and (max-width: 640px) {
  overflow-x: hidden;

}
`;

export const ChildrenWrapper = styled.div`
margin-top: 0px;
`
