import { URL } from 'react-native-dotenv';
import axios from 'axios';

export async function storeExpense(expenseData) {
  const response = await axios.post(
    process.env.URL + '/expenses.json',
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(URL + '/expenses.json');
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      // date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(process.env.URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(process.env.URL + `/expenses/${id}.json`);
}
