import styled, { css } from "styled-components";

const NotificationDiv = styled.div`
  ${props => {
    const { type } = props;
    return css`
      background: ${type === "success" ? "green" : "red"};
      color: white;
      font-size: 20px;
      position: absolute;
      right: 30px;
      max-height: 80px;
      min-height: 80px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 0 20px;
    `;
  }}
`;

export { NotificationDiv };
