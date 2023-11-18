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
  const [userData, setUserData] = useState<any>();
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
        if (user) {
          const retrievedUser = await userDetails(user.data.id);
          setUserData(retrievedUser);
          setChargeStatus(retrievedUser.charge_customers);
        }
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchDJDetails();
  }, [user]);

  return (
    <div className="dashboard__container">
      <h1>
        {userData?.name}, {userData?.location} on Dhun Jam
      </h1>
      <SongRequestCard
        chargeStatus={chargeStatus}
        changeChargeStatus={changeChargeStatus}
      />
      <AmountCard data={userData} chargeStatus={chargeStatus} />
    </div>
  );
}

export default Dashboard;
