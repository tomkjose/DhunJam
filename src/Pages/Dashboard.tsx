import React, { useEffect, useState } from "react";
import { useAuth } from "../Provider/AuthProvider";
import "../Styles/index.css";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../Api";
import SongRequestCard from "../Components/ChargeCard/ChargeCard";
import AmountCard from "../Components/AmountCard/AmountCard";
function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [dj, setDj] = useState<any>("");
  const changeChargeStatus = (chargeStatus: boolean | null) => {
    setChargeStatus(!chargeStatus);
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const [chargeStatus, setChargeStatus] = useState<boolean>(true);
  useEffect(() => {
    const fetchDJDetails = async () => {
      try {
        const djDetails = await userDetails(user.data.id);
        setDj(djDetails);
        // console.log("djDetails", djDetails);
        if (!user) {
          setChargeStatus(user.charge_customers);
        }
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchDJDetails();
  }, [user]);

  const handleSave = () => {
    console.log("called");
  };
  return (
    <div className="dashboard__container">
      <h1>
        {dj.name}, {dj.location} on Dhun Jam
      </h1>
      <SongRequestCard
        chargeStatus={chargeStatus}
        changeChargeStatus={changeChargeStatus}
      />
      <AmountCard
        data={dj}
        handleSave={handleSave}
        chargeStatus={chargeStatus}
      />
    </div>
  );
}

export default Dashboard;
