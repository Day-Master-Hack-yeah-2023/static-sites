import styled from 'styled-components';

const LayoutStled = styled.div``;

const LayoutChildrenContainer = styled.div<{ footerHeight: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ footerHeight }) => footerHeight}px;
`;

export { LayoutStled, LayoutChildrenContainer };
