import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMath() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMath();
    window.addEventListener("resize", changeMath);
    return () => {
      window.removeEventListener("resize", changeMath);
    };
  }, [media]);
  return match;
};

export default useMedia;
