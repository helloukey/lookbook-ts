import { useState, useEffect } from "react";

type Props = {};
type Loaded = {
  isLoaded: boolean;
};

const usePageLoad = (props: Props): Loaded => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // This will run one time after the component mounts
  useEffect(() => {
    const onPageLoad = (): void => {
      setIsLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return { isLoaded };
};
export default usePageLoad;
