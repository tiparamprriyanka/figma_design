

import React from "react";
import "../App.css";

const Details = ({ frame106, frame1061, propMinWidth, propMinWidth1 }) => {
  return (
    <div className="combined-container">
      <div className="details-container">
        <h3>Discover Your Perfect Match with Our Powerful Features</h3>
        <p>
          Unlock a world of possibilities with our cutting-edge features designed
          to make your journey to finding love seamless and <br /> enjoyable. From
          advanced search options to privacy controls, explore the tools that
          set us apart and maximize your <br /> chances of meeting your ideal life
          partner.
        </p>
        <div className="logo-and-search">
          <div className="logo-left-corner">
            <img src="/Images/logo.png" alt="Left Corner Logo" className="left-corner-logo" />
          </div>

          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Type to Search" aria-label="Search" />
              </form>
            </div>
          </nav>
        </div>
      </div>

      <div className="image-grid">
        <p>Based on your prefference</p>
        <div className="image-row">
          <div className="frame-parent1" style={{ minWidth: propMinWidth1 }}>
            <img className="frame-child2" alt="" src={"Images/Frame1.png"} />
            <div className="sravani-reddykonda-parent">
              <div className="sravani-reddykonda2">Sravani Reddykonda</div>
              <div className="yrs-5ft2">26 yrs | 5ft 6in</div>
              <div className="phn-9121772">Phn - 912177</div>
              <div className="mail-sravanigmailcom2">Mail - sravani@gmail.com</div>
              <div className="caste2">Caste</div>
              <div className="occupation2">Occupation</div>
            </div>
          </div>

          <div className="frame-parent1" style={{ minWidth: propMinWidth1 }}>
            <img className="frame-child2" alt="" src={"Images/frame2.png"} />
            <div className="sravani-reddykonda-parent">
              <div className="sravani-reddykonda2">Sravani Reddykonda</div>
              <div className="yrs-5ft2">26 yrs | 5ft 6in</div>
              <div className="phn-9121772">Phn - 912177</div>
              <div className="mail-sravanigmailcom2">Mail - sravani@gmail.com</div>
              <div className="caste2">Caste</div>
              <div className="occupation2">Occupation</div>
            </div>
          </div>
        </div>
        <div className="image-row">
          <div className="frame-parent1" style={{ minWidth: propMinWidth1 }}>
            <img className="frame-child2" alt="" src={"Images/frame3.png"} />
            <div className="sravani-reddykonda-parent">
              <div className="sravani-reddykonda2">Sravani Reddykonda</div>
              <div className="yrs-5ft2">26 yrs | 5ft 6in</div>
              <div className="phn-9121772">Phn - 912177</div>
              <div className="mail-sravanigmailcom2">Mail - sravani@gmail.com</div>
              <div className="caste2">Caste</div>
              <div className="occupation2">Occupation</div>
            </div>
          </div>

          <div className="frame-parent1 " style={{ minWidth: propMinWidth1 }}>
            <img className="frame-child2" alt="" src={"Images/frame4.png"} />
            <div className="sravani-reddykonda-parent">
              <div className="sravani-reddykonda2">Sravani Reddykonda</div>
              <div className="yrs-5ft2">26 yrs | 5ft 6in</div>
              <div className="phn-9121772">Phn - 912177</div>
              <div className="mail-sravanigmailcom2">Mail - sravani@gmail.com</div>
              <div className="caste2">Caste</div>
              <div className="occupation2">Occupation</div>
            </div>
          </div>
          <p>Based on your prefference</p>

          <div className="image-row">
          <div className="frame-parent1" style={{ minWidth: propMinWidth1 }}>
            <img className="frame-child2" alt="" src={"Images/frame5.png"} />
            <div className="sravani-reddykonda-parent">
              <div className="sravani-reddykonda2">Sravani Reddykonda</div>
              <div className="yrs-5ft2">26 yrs | 5ft 6in</div>
              <div className="phn-9121772">Phn - 912177</div>
              <div className="mail-sravanigmailcom2">Mail - sravani@gmail.com</div>
              <div className="caste2">Caste</div>
              <div className="occupation2">Occupation</div>
            </div>
          </div>

          <div className="frame-parent1 " style={{ minWidth: propMinWidth1 }}>
            <img className="frame-child2" alt="" src={"Images/frame6.png"} />
            <div className="sravani-reddykonda-parent">
              <div className="sravani-reddykonda2">Sravani Reddykonda</div>
              <div className="yrs-5ft2">26 yrs | 5ft 6in</div>
              <div className="phn-9121772">Phn - 912177</div>
              <div className="mail-sravanigmailcom2">Mail - sravani@gmail.com</div>
              <div className="caste2">Caste</div>
              <div className="occupation2">Occupation</div>
            </div>
          </div>
            

          </div>
        </div>
      </div>
     </div>
  );
};

export default Details
