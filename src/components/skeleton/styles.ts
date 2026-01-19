import styled from "styled-components";

export const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  width: 100%;
`;

export const SkeletonItem = styled.div`
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 8px;
`;
