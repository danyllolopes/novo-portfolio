import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = `Portfólio | ${props.title}`;
  }, [props]);
};

export default Head;
