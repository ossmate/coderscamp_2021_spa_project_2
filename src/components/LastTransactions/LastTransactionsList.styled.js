import styled from "styled-components";

export const StyledLastTransactionsList = styled.table`
  margin: 1rem;
  font-size: 2rem;
  height: 100%;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primaryLight};
  box-shadow: 5px 5px 12px 1px rgba(0, 0, 0, 0.13);

  & thead {
    & tr {
      box-shadow: 5px 5px 12px 1px rgba(0,0,0,0.13);
}
      & th {
        padding: 0.5rem 1rem;
        width: 150px;
        text-align: center;
        &:first-child {
          width: 200px;
        }
      }
    }
  }

  & tbody {
    border: 1px solid black;
    & tr {
      height: 50px;
    }
    & td {
      text-align: center;

      & span {
        margin-right: 10px;
      }

      &:nth-child(3) {
        font-size: 1.5rem;
      }
    }
  }
`;