import styled from "styled-components";

export const Container = ({ children }) => {
  return (
    <ContainerWrap className="px-6 py-16 text-primary">
      {children}
    </ContainerWrap>
  );
};

const ContainerWrap = styled.div`
  min-height: calc(100vh - 150px);
`;
