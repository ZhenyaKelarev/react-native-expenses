import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 89.85,
    date: new Date('2022-10-05'),
  },
  {
    id: 'e2',
    description: 'A pair of socks',
    amount: 45.69,
    date: new Date('2022-10-07'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 69.3,
    date: new Date('2022-09-21'),
  },
  {
    id: 'e4',
    description: 'Another books',
    amount: 70.55,
    date: new Date('2022-09-29'),
  },
  {
    id: 'e5',
    description: 'A pair of shoes',
    amount: 89.85,
    date: new Date('2022-10-05'),
  },
  {
    id: 'e6',
    description: 'A pair of socks',
    amount: 45.69,
    date: new Date('2022-10-07'),
  },
  {
    id: 'e7',
    description: 'Some bananas',
    amount: 69.3,
    date: new Date('2022-09-21'),
  },
  {
    id: 'e8',
    description: 'Another books',
    amount: 70.55,
    date: new Date('2022-09-29'),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
