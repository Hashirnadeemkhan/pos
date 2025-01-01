const transactionData = [
  {
    id: "4257 **** **** 7852",
    date: "11 April 2023",
    amount: "$79.49",
    cardType: "Visa",
    cardLabel: "Card",
    customer: "Helen Warren",
    paymentType: "Pay"
  },
  {
    id: "4427 **** **** 4568",
    date: "28 Jan 2023",
    amount: "$1254.00",
    cardType: "Visa",
    cardLabel: "Card",
    customer: "Kayla Lambie",
    paymentType: "Pay"
  },
  {
    id: "4265 **** **** 0025",
    date: "08 Dec 2022",
    amount: "$784.25",
    cardType: "Master",
    cardLabel: "Card",
    customer: "Hugo Lavarack",
    paymentType: "Pay"
  },
  {
    id: "7845 **** **** 5214",
    date: "03 Dec 2022",
    amount: "$485.24",
    cardType: "Stripe",
    cardLabel: "Card",
    customer: "Amber Scurry",
    paymentType: "Pay"
  },
  {
    id: "4257 **** **** 7852",
    date: "12 Nov 2022",
    amount: "$8964.04",
    cardType: "Maestro",
    cardLabel: "Card",
    customer: "Caitlyn Gibney",
    paymentType: "Pay"
  }
];

export default function TransactionsTable() {
  return (
    <div className="bg-white rounded-lg shadow mt-10 ">
      <div className="flex items-center justify-between p-6 ">
        <h2 className="text-xl font-semibold">Restaurants</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="py-4 px-6 text-left font-medium">Transaction ID</th>
              <th className="py-4 px-6 text-left font-medium">Date</th>
              <th className="py-4 px-6 text-left font-medium">Amount</th>
              <th className="py-4 px-6 text-left font-medium">Card Type</th>
              <th className="py-4 px-6 text-left font-medium">Customer</th>
              <th className="py-4 px-6 text-left font-medium">Payment</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactionData.map((transaction) => (
              <tr key={transaction.id + transaction.date} className="text-gray-500 hover:bg-gray-50">
                <td className="py-4 px-6">{transaction.id}</td>
                <td className="py-4 px-6">{transaction.date}</td>
                <td className="py-4 px-6 text-gray-900 font-medium">{transaction.amount}</td>
                <td className="py-4 px-6">
                  {transaction.cardType} {transaction.cardLabel}
                </td>
                <td className="py-4 px-6">{transaction.customer}</td>
                <td className="py-4 px-6">{transaction.paymentType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Button placed below the table and styled properly */}
      <div className="flex justify-center mt-6 ">
        <button className="bg-gray-300 px-6 py-3 rounded-lg text-black font-medium hover:bg-gray-400 mb-5">
          View All Restaurants
        </button>
      </div>
    </div>
  );
}
