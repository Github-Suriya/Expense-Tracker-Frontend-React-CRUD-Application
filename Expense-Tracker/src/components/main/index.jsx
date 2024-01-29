import { useDisclosure } from "@chakra-ui/react";
import "./main.css"
import Summary from "../summary";
import ExpenseView from "../expense-view";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import RefreshButton from "../refresher/refresher";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    allTransactions,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  });

  return (
    <div className="container">
      <div className="title-top">
        <h1>
          EXPENSE TRACKER
        </h1>
        <div className="add-trans">
          <RefreshButton />
          <button className="btn" onClick={onOpen}>
            Add New Transaction
          </button>
        </div>
      </div>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />

      <div className="expense-view">
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type={"expense"}
        />
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "income")}
          type={"income"}
        />
      </div>
    </div>
  );
}
