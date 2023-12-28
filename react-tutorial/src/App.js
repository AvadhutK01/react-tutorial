import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 1,
      date: new Date(2023, 1, 1),
      location: "Mumbai",
      description: "Tea",
      amount: 50,
    },
    {
      id: 2,
      date: new Date(2023, 1, 2),
      location: "Delhi",
      description: "Lunch",
      amount: 200,
    },
    {
      id: 3,
      date: new Date(2023, 1, 3),
      location: "Bangalore",
      description: "Dinner",
      amount: 250,
    },
    {
      id: 4,
      date: new Date(2023, 1, 4),
      location: "Chennai",
      description: "Snacks",
      amount: 120,
    },
    {
      id: 5,
      date: new Date(2023, 1, 5),
      location: "Hyderabad",
      description: "Coffee",
      amount: 100,
    },
    {
      id: 6,
      date: new Date(2023, 1, 6),
      location: "Kolkata",
      description: "Breakfast",
      amount: 180,
    },
    {
      id: 7,
      date: new Date(2023, 1, 7),
      location: "Pune",
      description: "Lunch",
      amount: 200,
    },
    {
      id: 8,
      date: new Date(2023, 1, 8),
      location: "Ahmedabad",
      description: "Dinner",
      amount: 220,
    },
    {
      id: 9,
      date: new Date(2023, 1, 9),
      location: "Jaipur",
      description: "Snacks",
      amount: 130,
    },
    {
      id: 10,
      date: new Date(2023, 1, 10),
      location: "Lucknow",
      description: "Tea",
      amount: 60,
    }
  ];

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseItem items={expenses} />
    </div >
  );
}

export default App;
