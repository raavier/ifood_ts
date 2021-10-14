import React from "react";
import styled from "styled-components";

export const Card = styled.section`
  max-width: 480px;
  height: 188px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block-start: 8px;
  margin-block-end: 8px;
  border: solid 1px #b8b8b8;
  border-radius: 8px;
`;

export const Image = styled.div`
  height: 120px;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Info = styled.div`
  height: 36.17%;
  width: 90%;
`;

export const Name = styled.p`
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #e8222e;
  margin-block-start: 12px;
  margin-block-end: 8px;
`;

export const OtherInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OtherInfo = styled.div`
  display: inline-block;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;
