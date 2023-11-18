import React, { useState, useEffect } from "react";
import "./AmountCard.css";
import GraphCard from "../GraphCard/GraphCard";
import { updateUserDetails } from "../../Api";
import { AmountDetailsProps, AmountCardProps } from "../../Utils/interface";

const AmountCard: React.FC<AmountCardProps> = ({ data, chargeStatus }) => {
  const [amountCategory6, setamountCategory6] = useState<number>(
    data?.amount?.category_6
  );
  const [amountCategory7, setamountCategory7] = useState<number>(
    data?.amount?.category_7
  );
  const [amountCategory8, setamountCategory8] = useState<number>(
    data?.amount?.category_8
  );
  const [amountCategory9, setamountCategory9] = useState<number>(
    data?.amount?.category_9
  );
  const [amountCategory10, setamountCategory10] = useState<number>(
    data?.amount?.category_10
  );

  const isSaveDisabled =
    amountCategory6 < 99 ||
    amountCategory7 < 79 ||
    amountCategory8 < 59 ||
    amountCategory9 < 39 ||
    amountCategory10 < 19;

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedAmount: AmountDetailsProps = {
      amount: {
        category_6: amountCategory6,
        category_7: amountCategory7,
        category_8: amountCategory8,
        category_9: amountCategory9,
        category_10: amountCategory10,
      },
    };
    updateUserDetails(data.id, updatedAmount);
  };

  const filterInput = (value: string): string => {
    return value.replace(/[^\d.]/g, "");
  };

  return (
    <div className="amount__card">
      <form className="amount__form" method="POST" onSubmit={handelSubmit}>
        <div className="input__container">
          <span>Custom song request amount-</span>
          <div className="input__box">
            <input
              type="number"
              pattern="[0-9]*"
              name="category_6"
              step="0.01"
              defaultValue={data?.amount?.category_6}
              id="input__text"
              onChange={(e) =>
                setamountCategory6(parseInt(filterInput(e.target.value)))
              }
              disabled={!chargeStatus}
            />
          </div>
        </div>
        <div className="input__container">
          <span>Regular song request amounts, from high to low-</span>
          <div className="amount__container ">
            <div className="input__box">
              <input
                type="number"
                pattern="[0-9]*"
                name="category_7"
                step="0.01"
                id="input__text"
                onChange={(e) => setamountCategory7(parseInt(e.target.value))}
                defaultValue={data?.amount?.category_7}
                disabled={!chargeStatus}
              />
            </div>
            <div className="input__box" id="input__text">
              <input
                type="number"
                pattern="[0-9]*"
                name="category_8"
                step="0.01"
                id="input__text"
                onChange={(e) => setamountCategory8(parseInt(e.target.value))}
                defaultValue={data?.amount?.category_8}
                disabled={!chargeStatus}
              />
            </div>
            <div className="input__box " id="input__text">
              <input
                type="number"
                pattern="[0-9]*"
                name="category_9"
                step="0.01"
                id="input__text"
                onChange={(e) => setamountCategory9(parseInt(e.target.value))}
                defaultValue={data?.amount?.category_9}
                disabled={!chargeStatus}
              />
            </div>
            <div className="input__box" id="input__text">
              <input
                type="number"
                pattern="[0-9]*"
                name="category_10"
                step="0.01"
                id="input__text"
                onChange={(e) => setamountCategory10(parseInt(e.target.value))}
                defaultValue={data?.amount?.category_10}
                disabled={!chargeStatus}
              />
            </div>
          </div>
        </div>
        {chargeStatus && (
          <GraphCard
            dataValues={data}
            amountCategory6={amountCategory6}
            amountCategory7={amountCategory7}
            amountCategory8={amountCategory8}
            amountCategory9={amountCategory9}
            amountCategory10={amountCategory10}
          />
        )}
        <button
          type="submit"
          disabled={isSaveDisabled || !chargeStatus}
          className="save__button"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AmountCard;
