import FrameEnterYourEmailAddress from "./FrameEnterYourEmailAddress";
import "../App.css";

const FormJoinUsToday = () => {
  return (
    <section className="form-join-us-today">
      <div className="container-content-heading-text">
        <div className="input-field-email-address">
          <div className="happy-maangalaaym-users">
            394+ Happy Maangalaaym Users
          </div>
          <h1 className="dont-just-take">Don’t just take our words</h1>
        </div>
        <div className="help-menu-about-features-works">
          <FrameEnterYourEmailAddress buttonPrimaryWithIconSend="Images/S1.png" />
          <FrameEnterYourEmailAddress buttonPrimaryWithIconSend="Images/S2.png" />
        </div>
        <div className="form-container">
          <img
            className="form-container-child"
            loading="eager"
            alt=""
            src="Images/arrow-left.png"
          />
          <img
            className="form-container-item"
            alt=""
            src="/Images/arrows.png"
          />
          <img
            className="form-container-inner"
            loading="eager"
            alt=""
            src="Images/arrow-right.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FormJoinUsToday;
