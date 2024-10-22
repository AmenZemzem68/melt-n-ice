import React from "react";

const AutoScrollBanner = () => {
  return (
    <div className="scroll-banner-container">
      <div className="scroll-banner-content">
        <p>
          EXPERIENTIAL EVENT CATERING&nbsp;&nbsp;|&nbsp;&nbsp;BOOK YOUR EVENT
          NOW&nbsp;&nbsp;|&nbsp;&nbsp;EXPERIENTIAL EVENT
          CATERING&nbsp;&nbsp;|&nbsp;&nbsp;BOOK YOUR EVENT NOW
        </p>
        {/* Duplicate the content to create the endless scroll effect */}
        <p>
          EXPERIENTIAL EVENT CATERING&nbsp;&nbsp;|&nbsp;&nbsp;BOOK YOUR EVENT
          NOW&nbsp;&nbsp;|&nbsp;&nbsp;EXPERIENTIAL EVENT
          CATERING&nbsp;&nbsp;|&nbsp;&nbsp;BOOK YOUR EVENT NOW
        </p>
      </div>
    </div>
  );
};

export default AutoScrollBanner;
