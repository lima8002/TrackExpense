import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: 'e1', 
        description: 'A pair of shoes', 
        amount: 59.99,
        date: new Date('2023-01-19'),
    },
    {
        id: 'e2', 
        description: 'A pair of pants', 
        amount: 89.29,
        date: new Date('2023-02-11'),
    },
    {
        id: 'e3', 
        description: 'Some bananas', 
        amount: 5.99,
        date: new Date('2023-02-01'),
    },
    {
        id: 'e4', 
        description: 'A book', 
        amount: 15.99,
        date: new Date('2023-02-21'),
    },
    {
        id: 'e5', 
        description: 'Another book', 
        amount: 18.99,
        date: new Date('2023-03-01'),
    }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList />
    </View>
  );
}

export default ExpensesOutput;