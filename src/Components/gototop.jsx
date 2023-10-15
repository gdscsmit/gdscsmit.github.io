// GOTO TOP BUTTON
import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the user has scrolled down 50% of the page.
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the event listener to the window.
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page when the button is clicked.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to 'auto' for an instant scroll
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}>
      <button onClick={scrollToTop}>
        {/* Arrow Up Icon */}
        <FaArrowCircleUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
