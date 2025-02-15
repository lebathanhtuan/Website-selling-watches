import styled from "styled-components";
import { Row, Col } from "antd";
import { color } from "themes/color";
export const DetailWrapper = styled(Row)`
  margin-top: 1.3em;
  width: 100%;
`;
export const TitleMoreDetail = styled(Col)`
  font-size: 1.4rem;
  color: ${color.primary};
`;
export const MoreDetailBody = styled(Col)``;
export const MoreDetailHead = styled.span`
  font-size: 1.2rem;
  color: ${color.primary};
  font-weight: 500;
`;
export const MoreDetailContent = styled.div`
  margin-top: 1em;
  display: flex;
  align-items: center;
`;
export const MoreDetailLabel = styled.span`
  margin-right: 10px;
  font-weight: 500;
  font-size: 1rem;
  min-width: 100px;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    min-width: 60px;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.7rem;
    min-width: 60px;
  }
`;
export const MoreDetailValue = styled.span`
  font-size: 1rem;
  color: ${color.primary};
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 376px) {
    font-size: 0.6rem;
  }
`;
