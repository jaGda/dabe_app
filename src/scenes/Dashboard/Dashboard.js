import React from "react";
import { dashboard, h2, charts, list } from "./Dashboard.module.css";
import {
  NewOperationForm,
  BudgetInput,
  ListOfExpenses,
  ChartPie,
  ChartBar
} from "../../components";

export default function Dashboard({
  selectedMonth,
  monthlyBudgets,
  setMonthlyBudgets,
  onAddMonthlyBudget,
  expenses,
  setExpenses,
  requirements,
  setRequirements,
  onAddExpense,
  onRemoveExpense
}) {
  return (
    <div className={dashboard}>
      <div>
        <BudgetInput
          selectedMonth={selectedMonth}
          monthlyBudgets={monthlyBudgets}
          onAddMonthlyBudget={onAddMonthlyBudget}
          setMonthlyBudgets={setMonthlyBudgets}
        />
        <NewOperationForm
          onAddExpense={onAddExpense}
          requirements={requirements}
          setRequirements={setRequirements}
        />
      </div>
      <div className={list}>
        <h2 className={h2}>List of financial operations</h2>
        <ListOfExpenses
          selectedMonth={selectedMonth}
          expenses={expenses}
          onRemoveExpense={onRemoveExpense}
        />
      </div>
      <div className={charts}>
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
