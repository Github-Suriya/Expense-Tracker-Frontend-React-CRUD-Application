import "./index.css";
import TransactionForm from "../add-transaction";
import TransactionChartSummary from "../chart";

export default function Summary({
  onClose,
  isOpen,
  totalExpense,
  totalIncome,
}) {
  return (
    <div className="box-main">
      <div className="main-container">
        <div className="balance">
          <header className="header1">
            Balance is ₹ {totalIncome - totalExpense}
          </header>
          <div className="total">
            <div className="total-income">
              <header className="total-title">₹ {totalIncome}</header>
              <p>Total Income</p>
            </div>
          </div>
          <div className="total">
            <div className="total-income">
              <header className="total-title">₹ {totalExpense}</header>
              <p>Total Expense</p>
            </div>
          </div>
        </div>
        <div className="box-secondary">
          <div>
            <TransactionChartSummary expense={totalExpense} income={totalIncome} />
          </div>
        </div>
      </div>
      <TransactionForm onClose={onClose} isOpen={isOpen} />
    </div>
  );
}
