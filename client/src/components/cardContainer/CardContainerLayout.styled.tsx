import styled, { css } from 'styled-components';

const shadow = css`
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
`;

export const DataCardLayoutContainer = styled.div`

  border-radius: 8px;
  ${shadow};
`;