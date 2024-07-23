import { styled } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  color: #ffffff;
  margin-top: 30px; 
  font-size: 30px;  
`;

export const Select = styled.div`
  display: flex;
  margin-top: 30px; 
  width: 50%;
`;

export const NewsWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width: 50%;
  flex-direction: row;
  align-items: center; 
  color: #ffffff; 
`;

export const Image = styled.img`
  margin-right: 30px;
  width: 120px;
  height: auto; 
`;

export const Button = styled.button`
  background-color: #060606;
  color: #ffffff;
  padding: auto;
  margin: 0 10px 0 0;
`;
