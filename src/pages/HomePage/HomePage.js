import { StyledHomePage } from "./HomePage.styled";
import { LastTransactionsList } from "../../components/LastTransactions/LastTransactionsList";

const list = [
  {
    id: "ad7a8aac-8718-4585-924e-55100f495abb",
    title: "Gap",
    category: "clothes",
    amount: 432.87,
    date: "2022-01-05",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, corrupti.",
    paymentType: "card",
    type: "expense",
  },
  {
    id: "94d22477-3870-43d6-935e-7483e06fbd94",
    title: "M&S Food Court",
    category: "food",
    amount: 15.26,
    date: "2022-01-07",
    description: "Lorem ipsum dolor sit amet.",
    paymentType: "card",
    type: "income",
  },
  {
    id: "363e34d9-6181-40cc-ac85-f19695f422ca",
    title: "Tesco Petrol",
    category: "fuel",
    amount: 150.04,
    date: "2022-01-12",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    paymentType: "card",
    type: "expense",
  },
  {
    id: "58f2124a-ab8b-4b88-bb0d-e2dabf00ac94",
    title: "Netlix",
    category: "entertainment",
    amount: 7.99,
    date: "2022-01-13",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci non voluptatem saepe?",
    paymentType: "card",
    type: "expense",
  },
  {
    id: "ad7a8aac-8718-4585-924e-55100",
    title: "Microwave",
    category: "flat",
    amount: 100,
    date: "2022-01-15",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    paymentType: "card",
    type: "expense",
  },
  {
    id: "ad7a8aac-8718-4325-924e-55440f",
    title: "Kettle",
    category: "flat",
    amount: 50,
    date: "2022-01-17",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    paymentType: "card",
    type: "expense",
  },
  {
    id: "ad7a8aac-1234-4325-371d-55440f49",
    title: "Pay from work",
    category: "payment",
    amount: 1500,
    date: "2022-01-20",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    paymentType: "card",
    type: "income",
  },
  {
    id: "ad7a8aac-8718-4321-756v-55440f495",
    title: "Flowers",
    category: "flat",
    amount: 20,
    date: "2022-01-22",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    paymentType: "card",
    type: "expense",
  },
  {
    id: "ad7a8aac-8718-4321-734f-55440f495a",
    title: "Books",
    category: "entertaiment",
    amount: 60,
    date: "2022-01-28",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    paymentType: "card",
    type: "expense",
  },
  {
    id: "ad7a8aac-8718-4321-845k-55440f495ab",
    title: "Car petrol",
    category: "fuel",
    amount: 120,
    date: "2022-01-30",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    paymentType: "card",
    type: "expense",
  },
];

const HomePage = () => {
  return (
    <StyledHomePage>
      <LastTransactionsList transactionsList={list} />
      <div>widgets component</div>
    </StyledHomePage>
  );
};

export default HomePage;
