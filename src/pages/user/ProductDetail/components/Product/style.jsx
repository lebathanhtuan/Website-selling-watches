import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { color } from "themes/color";
export const ProductDetail = styled(Row)``;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;
  position: relative;
`;
export const ImageDefault = styled.img`
  width: 100%;
  filter: brightness(0.8);
  object-fit: contain;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 auto;
  object-fit: cover;
`;
export const ImageDetails = styled.img`
  width: 100%;
  object-fit: contain;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 auto;
  object-fit: cover;
  margin-top: 10px;
  cursor: pointer;
`;
export const Brands = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.outstanding};
  font-weight: 600;
  color: ${color.primaryText};
  font-size: 2rem;
  display: flex;
  max-width: 180px;
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
    max-width: 120px;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1.4rem;
    max-width: 140px;
  }
`;
export const Report = styled(Col)`
  font-size: 1rem;
  color: #626060;
  text-align: right;
  cursor: pointer;
`;
export const Name = styled.div`
  margin-top: 0.5em;
  font-size: 1.1rem;
  @media screen and (max-width: 576px) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Preview = styled(Row)`
  width: 100%;
  margin-top: 0.5em;
  font-size: 1.1rem;
`;
export const Heart = styled.div`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 150px;
  @media screen and (max-width: 576px) {
    font-size: 0.8rem;
  }
`;
export const Price = styled(Col)`
  background-color: #ccc;
  margin-top: 0.5em;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const CurrentPrice = styled.div`
  display: flex;
  font-weight: 600;
  justify-content: center;
  color: ${color.outstanding};
  width: 50%;
  font-size: 1.7rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
export const OldPrice = styled.div`
  width: 50%;
  justify-content: center;
  font-size: 1.7rem;
  color: ${(props) => (props.discount !== 0 ? "#a19a9a" : `${color.primary}`)};
  text-decoration: ${(props) =>
    props.discount !== 0 ? "line-through" : "none"};
  display: ${(props) => (props.discount === 0 ? "none" : "flex")};
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.2rem;
  }
`;
export const Unit = styled.span`
  font-size: 1rem;
`;
export const Title = styled(Col)`
  margin-top: 1em;
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
export const Info = styled(Row)`
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const Desc = styled(Col)`
  text-align: center;
  margin-top: 1em;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${color.outstanding};
  @media screen and (max-width: 768px) {
    font-size: 0.9rem !important;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.8rem !important;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1rem;
  }
`;
export const Stock = styled.div`
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem !important;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.8rem !important;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1rem;
  }
`;
export const Transport = styled.div`
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem !important;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.8rem !important;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1rem;
  }
`;
export const AddCart = styled(Button)`
  font-size: 1.2rem;
  padding: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem !important;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.9rem !important;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const Buy = styled(Button)`
  font-size: 1.2rem;
  padding: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem !important;
  }
  @media screen and (max-width: 576px) {
    font-size: 0.9rem !important;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
export const QuantityWrapper = styled(Col)`
  cursor: pointer;
  margin-top: 1em;
  display: flex;

  & Button {
    font-size: 1.6rem;
    width: 7%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
      font-size: 1.1rem !important;
    }
    @media screen and (max-width: 576px) {
      font-size: 0.9rem !important;
    }
    @media screen and (max-width: 1024px) and (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
`;
export const Quantity = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 1.5em;
`;
export const ContentQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const Discount = styled.div`
  z-index: 100;
  top: 2%;
  left: 1%;
  position: absolute;
  width: 90px;
  height: 90px;
  background-color: ${color.outstanding};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  & > p {
    color: ${color.primaryText};
    font-size: 1.5rem;
    font-weight: 600;
    @media screen and (max-width: 576px) {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 576px) {
    font-size: 1rem;
    width: 60px;
    height: 60px;
  }
`;
export const FullBox = styled.div`
  font-size: 1.4rem;
  border-radius: 4px;
  z-index: 100;
  top: 0;
  right: 0;
  position: absolute;
  width: 250px;
  background-color: #049f04;
  display: flex;
  align-items: center;
  justify-content: center;
  & > p {
    color: ${color.primaryText};
    font-weight: 600;
  }
  @media screen and (max-width: 576px) {
    width: 150px;
    font-size: 0.8rem;
  }
`;
