import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 55px;
  width: 100%;
`;

export const Card = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block-start: 8px;
  margin-block-end: 8px;
  border-radius: 8px;
  padding: 10px;
`;

export const Img = styled.img`
  height: 120px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Info = styled.div`
  height: 36.17%;
  margin: 0 16px;
`;

export const Name = styled.p`
  width: 328px;
  height: 18px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
`;

export const OtherInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OtherInfo = styled.div`
  width: 328px;
  height: 18px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 2px 0;
`;
