interface BillsPaid {
  type: string;
  amount: number;
}

interface MoneyTransfered {
  userID: number;
  amount: number;
  desc?: string;
}

interface Transactions {
  type: string;
  amount: number;
  desc?: string;
}

interface User {
  userId: number;
  userPin: number;
  accountBalance: number;
  billsPaid?: BillsPaid[];
  moneyTransfered?: MoneyTransfered[];
  transactions?: Transactions[];
}

function generateRandomNumber(): number {
  return Math.floor(Math.random() * 90000) + 10000;
}

function generateUserData() {
  return {
    userId: generateRandomNumber(),
    userPin: generateRandomNumber(),
    accountBalance: generateRandomNumber(),
    billsPaid: [],
    moneyTransfered: [],
    transactions: [],
  };
}

const userData: User[] = [];

for (let i = 0; i < 5; i++) {
  userData.push(generateUserData());
}

export default userData;
