import React, { useState } from "react";
import "./ChargeCard.css";
import { ChargeCardProps } from "../../Utils/interface";
const ChargeCard: React.FC<ChargeCardProps> = ({
  chargeStatus,
  changeChargeStatus,
}) => {
  const [radioValue, setRadioValue] = useState<boolean | null>(chargeStatus);

  // console.log("radioValue", radioValue);
  // console.log("chargeStatus", chargeStatus);
  return (
    <div className="request_card">
      <div className="request_container">
        <div className="charge_status_container">
          <span>
            Do you want to charge your customers for requesting songs?
          </span>
          <div className="charge_status">
            <input
              type="radio"
              name="chargeCustomers"
              checked={radioValue === true}
              onChange={() => {
                setRadioValue(true);
                changeChargeStatus(radioValue);
              }}
            />
            <label htmlFor="true">Yes</label>
            <input
              type="radio"
              name="chargeCustomers"
              checked={radioValue === false}
              onChange={() => {
                setRadioValue(false);
                changeChargeStatus(radioValue);
              }}
            />
            <label htmlFor="false">No</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargeCard;
