import styled, { css } from "styled-components";

const InnerContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600px;
  font-family: "Roboto";
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  padding-left: 10px;
`;

const CustomCard = styled.div`
  border: 1px solid #dde1e2;
  width: 30rem;
  margin: 1.5rem;
  background-color: #f7f9fb;

  > div {
    padding: 30px;
  }
`;

const Button = styled.button`
  ${props => {
    const { disabled } = props;
    return css`
      border-radius: 25px;
      border: 1px solid transparent;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 22px;
      height: 41px;
      text-align: center;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 600;
      margin-top: 20px;
      min-width: 183px;
      ${disabled ? "cursor: not-allowed;" : "cursor: pointer;"}
      ${disabled
        ? "background-color: grey;"
        : "background-color: #2c80ff;"}
      color: #fff;
      :hover {
        ${disabled ? "background-color: grey;" : "background-color: #1c71c7;"}
      }
    `;
  }};
`;

const SkeletonForm = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export {
  InnerContainer,
  Title,
  FormContainer,
  CustomCard,
  Button,
  SkeletonForm
};
