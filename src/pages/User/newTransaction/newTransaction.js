import React from "react";
import { Link } from "react-router-dom";
import "./newTransaction.css";

export default function NewTransaction() {
  const Transactions = [
    {
      id: "1",
      customer: "بردیا شمس",
      Date: "2 اسفند 1400",
      Rial: "256.000 تومان",
      Afghan: "300.000 افغان",
      Status: "",
    },
    {
      id: "2",
      customer: "بردیا شمس",
      Date: "2 اسفند 1400",
      Rial: "256.000 تومان",
      Afghan: "300.000 افغان",
      Status: "",
    },
    {
      id: "3",
      customer: "بردیا شمس",
      Date: "2 اسفند 1400",
      Rial: "256.000 تومان",
      Afghan: "300.000 افغان",
      Status: "",
    },
    {
      id: "4",
      customer: "بردیا شمس",
      Date: "2 اسفند 1400",
      Rial: "256.000 تومان",
      Afghan: "300.000 افغان",
      Status: "",
    },
  ];
  const Button = ({ type }) => {
    return <button className={"newTransactionButton " + type}>{type}</button>;
  };
  return (
    <div className="newTransaction">
      <h3 className="newTransactionTitle">اخرین تراکنش ها</h3>
      <table className="newTransactionTable">
        <tr className="newTransactionTr">
          <th className="newTransactionTh">مشتری</th>
          <th className="newTransactionTh">تاریخ</th>
          <th className="newTransactionTh">ریال</th>
          <th className="newTransactionTh">افغان</th>
          <th className="newTransactionTh">وضعیت</th>
        </tr>
        {Transactions.map((Transaction) => {
          return (
            <tr className="newTransactionTr">
              <td className="newTransactionUser">
                <img
                  src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="newTransactionImg"
                />

                <Link
                  to={`user/${Transaction.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span className="newTransactionName">
                    {Transaction.customer}
                  </span>
                </Link>
              </td>
              <td className="newTransactionDate">{Transaction.Date}</td>
              <td className="newTransactionAmount">{Transaction.Rial}</td>
              <td className="newTransactionAmount">{Transaction.Afghan}</td>
              <td className="newTransactionStatus">
                <Button type="Approved" />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
