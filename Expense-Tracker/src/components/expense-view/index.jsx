import { Flex } from "@chakra-ui/react";
import "./expense-view.css";

export default function ExpenseView({ type, data }) {
  return (
    <div className="expense-container">
      <div className="expense-view">
        <h1>
          {type === "income" ? "Income" : "Expense"}
        </h1>
      </div>
      {data.map((item) => (
        <>
          <Flex
            bg={type === "expense" ? "red.50" : "blue.50"}
            mt={"4"}
            justifyContent={"space-between"}
            alignItems={"center"}
            border={"1px solid"}
            borderColor={type === "expense" ? "red.100" : "blue.100"}
            p={"4"}
            borderRadius={"8"}
          >
            <div className="content">
              <p>
                {item.description}
              </p>
            </div>
            <p>₹ {item.amount}</p>
          </Flex>
        </>
      ))}
    </div>
  );
}
