import "../App.css";

const FrameEnterYourEmailAddress = ({ buttonPrimaryWithIconSend }) => {
  return (
    <div className="frame-enter-your-email-address">
      <img
        className="button-primary-with-icon-send"
        loading="eager"
        alt=""
        src={buttonPrimaryWithIconSend}
      />
      <div className="frame-parent5">
        <div className="star-1-parent">
          <img
            className="star-1-icon"
            loading="eager"
            alt=""
            src="Images/star.png"
          />
          <img
            className="star-2-icon"
            loading="eager"
            alt=""
            src="Images/star.png"
          />
          <img
            className="star-3-icon"
            loading="eager"
            alt=""
            src="Images/star.png"
          />
          <img className="star-4-icon" alt="" src="Images/star.png" />
          <img className="star-5-icon" alt="" src="Images/star.png" />
        </div>
        <div className="we-love-landingfolio">
          "We love Landingfolio! Our designers were using it for their projects,
          so we already knew what kind of design they want."
        </div>
        <div className="raghu-shwetha">{`Raghu & Shwetha`}</div>
      </div>
    </div>
  );
};

export default FrameEnterYourEmailAddress;
