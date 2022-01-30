import { useEffect, useState } from "react";
import { PageButton } from "../PageButton/PageButton";
import { PageNumberButton } from "../PageNumberButton/PageNumberButton";
import { requestForTransactionsListLength } from "../../../services/api/transactionsListService";
import { ButtonsList } from "./Pagination.styled";
import { StyledItem } from "./Pagination.styled";
import PropTypes from "prop-types";

const getPaginationButtons = (
  arrayFromNumberOfPages,
  actualPage,
  numberOfPages,
  paginate
) => {
  let paginateButtons;

  const firstButton = (
    <PageNumberButton key={1} pageNumber={1} paginate={paginate} />
  );

  const lastButton = (
    <PageNumberButton
      key={numberOfPages}
      pageNumber={numberOfPages}
      paginate={paginate}
    />
  );

  if (actualPage < 5) {
    paginateButtons = [...arrayFromNumberOfPages]
      .slice(0, 5)
      .map((pageNumber) => (
        <PageNumberButton
          key={pageNumber}
          pageNumber={pageNumber}
          paginate={paginate}
        />
      ));

    return (
      <>
        {paginateButtons}
        <StyledItem>...</StyledItem>
        {lastButton}
      </>
    );
  }

  if (actualPage >= 5 && actualPage <= numberOfPages - 4) {
    paginateButtons = [...arrayFromNumberOfPages]
      .slice(actualPage - 2, actualPage + 1)
      .map((pageNumber) => (
        <PageNumberButton
          key={pageNumber}
          pageNumber={pageNumber}
          paginate={paginate}
        />
      ));

    return (
      <>
        {firstButton}
        <StyledItem>...</StyledItem>
        {paginateButtons}
        <StyledItem>...</StyledItem>
        {lastButton}
      </>
    );
  }

  if (actualPage >= numberOfPages - 4) {
    paginateButtons = [...arrayFromNumberOfPages]
      .slice(arrayFromNumberOfPages.length - 5)
      .map((pageNumber) => (
        <PageNumberButton
          key={pageNumber}
          pageNumber={pageNumber}
          paginate={paginate}
        />
      ));

    return (
      <>
        {firstButton}
        <StyledItem>...</StyledItem>
        {paginateButtons}
      </>
    );
  }
};

export const Pagination = ({ entriesOnPage, actualPage, paginate }) => {
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);

  const numberOfPages =
    length % entriesOnPage === 0
      ? Math.floor(length / entriesOnPage)
      : Math.floor(length / entriesOnPage) + 1;

  const arrayFromNumberOfPages = Array.from(
    { length: numberOfPages },
    (_, i) => i + 1
  );

  const getTransactionsListLength = async () => {
    try {
      setLoading(true);
      const response = await requestForTransactionsListLength();
      setLength(response);
    } catch {
      throw new Error(
        "An error occurred while invoke function getTransactionsLength: the transactions length cannot be get"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactionsListLength();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  let previousPageButtons = null,
    nextPageButtons = null;

  if (actualPage > 1) {
    previousPageButtons = (
      <PageButton
        direction="left"
        pageNumber={actualPage - 1}
        paginate={paginate}
      />
    );
  }

  if (actualPage < numberOfPages) {
    nextPageButtons = (
      <PageButton
        direction="right"
        pageNumber={actualPage + 1}
        paginate={paginate}
      />
    );
  }

  const pageNumberButtons = getPaginationButtons(
    arrayFromNumberOfPages,
    actualPage,
    numberOfPages,
    paginate
  );

  return (
    <ButtonsList>
      {previousPageButtons}
      {pageNumberButtons}
      {nextPageButtons}
    </ButtonsList>
  );
};

Pagination.propTypes = {
  entriesOnPage: PropTypes.number,
  actualPage: PropTypes.number,
  paginate: PropTypes.func,
};