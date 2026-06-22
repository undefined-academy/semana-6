const transactions = [
    {
        id: 121,
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -25,
        category: "eating_out",
        time: "2018-06-12T12:34:00Z"
    },
    {
        id: 122,
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -150,
        category: "eating_out",
        time: "2018-07-12T09:34:00Z"
    },
    {
        id: 123,
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -50,
        category: "eating_out",
        time: "2018-07-12T12:34:00Z"
    },
    {
        id: 124,
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -50,
        category: "eating_out",
        time: "2018-07-12T12:40:00Z"
    },
    {
        id: 125,
        sourceAccount: "my_account",
        targetAccount: "candy_shop",
        amount: -100,
        category: "eating_out",
        time: "2018-09-12T10:34:00Z"
    },
    {
        id: 126,
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -100,
        category: "shopping",
        time: "2018-10-12T09:34:00Z"
    }
]

const TWENTY_THREE_HOURS_IN_MS = 23 * 60 * 60 * 1000;
const FIFTY_NINE_MINUTES_IN_MS = 59 * 60 * 1000;
const FIFTY_NINE_SECONDS_IN_MS = 59 * 1000;


const filterByCategory =
    ({ category }) => (transaction) => transaction.category === category;


//Pruebas con filter/Category
const getByCategory = (transactions, category) => transactions.filter(filterByCategory({ category }))
//console.log(getByCategory(transactions,"eating_out")) 

const getByCategory2 = (array, category) => array.filter(item => item.category === category)
//console.log(getByCategory2(transactions, "shopping"))



const filterByDate = ({ startTime, endTime }) => {
    const startDate = new Date(startTime).getTime();
    const endDate = new Date(endTime).getTime();

    return transaction => {
        const transactionTime = new Date(transaction.time).getTime();
        if (transactionTime > startDate && transactionTime < endDate) {
            return true;
        }
    }
}


//Pruebas con filter/Date
const getByRangeDate = (transactions, startTime, endTime) =>
    transactions.filter(filterByDate({ startTime, endTime }))
//console.log(getByRangeDate(transactions, "2018-07-01", "2018-07-31"))

const getByRangeDate2 = (array, startDate, endDate) => array.filter(item => item.time
    > startDate && item.time < endDate)
//console.log(getByRangeDate2(transactions, "2018-09-01", "2018-09-30"))   


const sumAmount = (totalBalance, transaction) => {
    return totalBalance + transaction.amount
}

const getBalance = transactions => transactions.reduce(sumAmount, 0);
//console.log(getBalance(transactions))



const getBalanceByCategoryAndRangeDate = (
    transactions,
    category,
    startTime,
    endTime
) =>
    transactions
        .filter(filterByCategory({ category }))
        .filter(filterByDate({ startTime, endTime }))
        .reduce(sumAmount, 0);

console.log("Balance: " + getBalanceByCategoryAndRangeDate(transactions, "eating_out", "2018-01-01", "2019-12-31"))
