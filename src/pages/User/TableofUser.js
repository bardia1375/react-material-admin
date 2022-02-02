import * as React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import "./UserList.css";
import MaterialTable from "material-table";
import XLSX from "xlsx";
export default function TableofUser() {
  const empList = [
    {
      id: 1,
      name: "بردیا",
      email: "neeraj@gmail.com",
      phone: 9876543210,
      city: "Bangalore",
    },
    {
      id: 2,
      name: "رضا",
      email: "raj@gmail.com",
      phone: 9812345678,
      city: "Chennai",
    },
    {
      id: 3,
      name: "علی",
      email: "david342@gmail.com",
      phone: 7896536289,
      city: "Jaipur",
    },
    {
      id: 4,
      name: "محمد",
      email: "vikas75@gmail.com",
      phone: 9087654321,
      city: "Hyderabad",
    },
  ];
  const [data, setData] = useState(empList);
  const columns = [
    {
      title: "ID",
      field: "id",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
    },
    {
      title: "نام کاربری",
      field: "name",
      validate: (rowDate) => {
        if (rowDate.name === undefined || rowDate.name === "") {
          return "این فیلد ضروری است";
        } else if (rowDate.name.length < 2) {
          return "نام شما حداقل باید دارای دو کاراکتر باشد";
        }
        return true;
      },
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },

      render: (rowData) => {
        return <span style={{ display: "flex" }}>{rowData.name}</span>;
      },
    },
    {
      title: "ایمیل",
      field: "email",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      validate: (rowDate) => {
        if (rowDate.email === undefined || rowDate.email === "") {
          return "لطفاایمیل خود را وارد کنید ";
        } else if (!rowDate.email.includes("@" && ".")) {
          return "لطفا ایمیل معتبر وارد کنید";
        }
        return true;
      },
    },
    {
      title: "شماره موبایل",
      field: "phone",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
      validate: (rowDate) => {
        if (rowDate.phone === undefined || rowDate.phone === "") {
          return "لطفا تلفن همراه خود را وارد کنید ";
        } else if (rowDate.phone.length <= 10) {
          return "تلفن همراه شما باید حدقل 10 عدد داشته باشد";
        }
        return true;
      },
    },
    {
      title: "شهر",
      field: "city",
      cellStyle: {
        textAlign: "right",
      },
      headerStyle: {
        textAlign: "right",
      },
    },
  ];

  
//downloadExcel

const downloadExcel = () => {
    const newData = data.map((row) => {
      delete row.tableData;
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "students");
    //Buffer
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download
    XLSX.writeFile(workBook, "StudentsData.xlsx");
  };

  return (
    <div>
      <MaterialTable
        title="لیست کاربران"
        data={data}
        columns={columns}
        localization={{
          body: {
            editRow: { deleteText: "آیا میخواهید این سطر را حذف کنید؟" },
          },
        }}
        editable={{
          //add row
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              const updatedRows = [
                ...data,
                { id: Math.floor(Math.random() * 100), ...newRow },
              ];
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),

          //Delete row
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data];
              updatedRows.splice(index, 1);
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),

          //Edit row
          onRowUpdate: (updatedRow, oldRow) =>
            new Promise((resolve, reject) => {
              const index = oldRow.tableData.id;
              const updatedRows = [...data];
              updatedRows[index] = updatedRow;
              setTimeout(() => {
                setData(updatedRows);
                resolve();
              }, 2000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "last",
          filtering: true,
        }}
        actions={[
          {
            icon: () => <button>Export</button>,
            tooltip: "Export to Excel",
            onClick: () => downloadExcel(),
            isFreeAction: true,
          },
        ]}
      />
    </div>
  );
}
