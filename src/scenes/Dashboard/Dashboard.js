import React from "react";
import { dashboard } from "./Dashboard.module.css";
import {
  NewOperationForm,
  BudgetInput,
  ListOfExpenses,
  ChartPie,
  ChartBar
} from "../../components";

export default function Dashboard({
  budgetPerMonth,
  setBudgetPerMonth,
  budgetDetermined,
  setBudgetDetermined
}) {
  return (
    <div className={dashboard}>
      <div>
        <BudgetInput
          budgetPerMonth={budgetPerMonth}
          setBudgetPerMonth={setBudgetPerMonth}
          budgetDetermined={budgetDetermined}
          setBudgetDetermined={setBudgetDetermined}
        />
        <NewOperationForm />
      </div>
      <div>
        <h2 style={{ margin: 30 }}>List of financial operations</h2>
        <ListOfExpenses />
      </div>
      <div
        style={{
          margin: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div>
          <ChartPie />
        </div>
        <div>
          <ChartBar />
        </div>
      </div>
    </div>
  );
}