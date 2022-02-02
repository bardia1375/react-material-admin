import {
  Delete,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from "@material-ui/icons";
import * as React from "react";

import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./UserList.css";
import MUIDataTable from "mui-datatables";
import { IconButton } from "@material-ui/core";
export default function UserList() {
  const [data, setData] = useState(userRows);
  console.log("111", data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "user",
  //     headerName: "User",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="userListUser">
  //           <img className="userListImg" src={params.row.avatar} alt="" />
  //           {params.row.username}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "email", headerName: "Email", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 120,
  //   },
  //   {
  //     field: "transaction",
  //     headerName: "Transaction Volume",
  //     width: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/user/" + params.row.id}>
  //             <button className="userListEdit">Edit</button>
  //           </Link>
  //           <DeleteIcon
  //             className="userListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];
  const transform = () => {
    return data?.map((i, index) => {
      return [
        <Link
          to={`/app/user/${i.id}`}
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
        >
          {i.id}
        </Link>,
        <Link
          to={`/app/user/${i.id}`}
          style={{ textDecoration: "none", display: "flex" }}
        >
          <img
            src={i.avatar}
            alt={i.avatar}
            width="80px"
            style={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              marginLeft: "8px",
            }}
          />
          <p style={{ cursor: "pointer", color: "black" }}>{i.username}</p>
        </Link>,
        <p>{i.email}</p>,
        <p>{i.phone}</p>,
        <p>{i.meli}</p>,
        <p>{i.sheba}</p>,
        <p>{i.cart}</p>,
        <IconButton>
          <DeleteIcon
            className="userListDelete"
            onClick={() => handleDelete(i.id)}
          />
        </IconButton>,

        <Link to={`/app/industryList/${i.id}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>,
      ];
    });
  };
  return (
    <div className="userList">
      <MUIDataTable
        data={transform(data)}
        disableSelectionOnClick
        columns={[
          "Id",
          "نام کاربر",
          "ایمیل",
          "شماره تلفن همراه",
          "کدملی",
          "شماره شبا",
          "شماره کارت",
          "حذف",
          "ویرایش",
        ]}
        pageSize={8}
        localization={{ body: { editRow: { deleteText: 'آیا میخواهید این سطر را حذف کنید؟' } } }}
        editable={{
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

          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })
          
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "last",
        }}
      />
    </div>
  );
}
