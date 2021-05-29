import styled from "styled-components";
import { fontFamily, fontSize } from "utils/styles";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 50px;
`;

export const Left = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Right = styled(Left)`
  gap: 0.5rem;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export const Logo = styled.h1`
  font-family: ${fontFamily.poppins.regular};
  font-size: ${fontSize.L};
`;

export const UserImage = styled.img`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  cursor: pointer;
`;
