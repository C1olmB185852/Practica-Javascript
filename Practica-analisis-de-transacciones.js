const transactions = [
    { id: 1, description: 'Pago de luz', amount: -50},
    { id: 2, description: 'Pago de agua', amount: 2000},
    { id: 3, description: 'Pago de internet', amount: -100},
    { id: 4, description: 'Pago de gas', amount: -30}
]

// 1. Calculate total Balance

const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
console.log('Total Balance: ', totalBalance);

// 2. find the largest transaction

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log('Largest Transaction: ', largestTransaction);

const purchaseTransactions = transactions.filter(transaction => transaction.amount < 0)
console.log(purchaseTransactions);