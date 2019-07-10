import React, { useState } from "react";
import { newOperationForm, required } from "./NewOperationForm.module.css";
import {
  DatePicker,
  NumericInput,
  CategoriesSelect,
  OperationTitle,
  ButtonSubmit
} from "../../components";
import uuid from "uuid/v4";

export default function NewOperationForm({
  onAddExpense,
  requirements,
  setRequirements
}) {
  const [expense, setExpense] = useState({
    id: uuid(),
    cost: 0,
    date: new Date(),
    monthYear: new Date().toLocaleDateString().slice(-7),
    category: "",
    title: "",
    desc: false
  });

  function addExpenseByClick(expense) {
    if (
      expense.cost !== 0 &&
      expense.category &&
      expense.category !== "Unassigned" &&
      expense.title
    ) {
      setRequirements(false);
      onAddExpense(expense);
      setExpense({
        id: uuid(),
        cost: 0,
        date: new Date(),
        monthYear: new Date().toLocaleDateString().slice(-7),
        category: "",
        title: "",
        desc: false
      });
    } else {
      setRequirements(true);
      return;
    }
  }

  return (
    <form className={newOperationForm}>
      <NumericInput
        onChange={value => setExpense({ ...expense, cost: value })}
        value={expense.cost}
      />
      <CategoriesSelect expense={expense} setExpense={setExpense} />
      <DatePicker expense={expense} setExpense={setExpense} />
      <OperationTitle
        value={expense.title}
        onChange={event =>
          setExpense({ ...expense, title: event.target.value })
        }
      />
      <ButtonSubmit
        style={{ backgroundColor: "rgba(19, 145, 135, 0.85)" }}
        onClick={() =>
          addExpenseByClick({
            ...expense,
            date: expense.date.toLocaleDateString()
          })
        }
      >
        Add
      </ButtonSubmit>
      {requirements ? <p className={required}>* All fields required</p> : null}
    </form>
  );
}
