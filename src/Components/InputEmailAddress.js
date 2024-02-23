import { useMemo } from "react";
import "./InputEmailAddress.css";

const InputEmailAddress = ({
  frame106,
  frame1061,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="input-email-address">
      <div className="frame-div" style={frameDivStyle}>
        <img className="frame-child1" alt="" src={frame106} />
        <div className="join-section">
          <div className="sravani-reddykonda1">Sravani Reddykonda</div>
          <div className="yrs-5ft1">26 yrs | 5ft 6in</div>
          <div className="phn-9121771">Phn - 912177</div>
          <div className="mail-sravanigmailcom1">Mail - sravani@gmail.com</div>
          <div className="caste1">Caste</div>
          <div className="occupation1">Occupation</div>
        </div>
      </div>
  
   
    </div>
  );
};

export default InputEmailAddress