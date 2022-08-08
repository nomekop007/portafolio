import React from "react";
import LoaderContainer from "../../containers/LoaderContainer";
import AuthorDiego from "../../assets/images/AuthorDiego";

const Loader = () => {
  return (
    <LoaderContainer>
      <AuthorDiego width={250} />
    </LoaderContainer>
  );
};

export default Loader;
