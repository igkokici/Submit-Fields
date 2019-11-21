import styled from "styled-components";

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

  > input {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    padding-left: 10px;
    cursor: pointer;
    :hover {
      border-color: #829ca9;
      transition: all 0.2s ease-in-out;
    }
  }
  > select {
    height: 50px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;

    > option {
      background-color: white;
    }
  }

  > textarea {
    font-size: 14px;
    font-weight: 400;
    padding-left: 10px;
    padding-top: 10px;
    cursor: pointer;
    :hover {
      border-color: #829ca9;
      transition: all 0.2s ease-in-out;
    }
  }
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
  cursor: pointer;
  background-color: #2c80ff;
  color: #fff;
  :hover {
    background-color: #1c71c7;
  }
`;

export { InnerContainer, Title, FormContainer, CustomCard, Button };
