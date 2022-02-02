import { Grid, IconButton } from "@material-ui/core";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

function ProductList() {
  const [Industry, setIndustry] = useState();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get("http://nahoor.af:8080/nahoor/product/");
      setIndustry(response.data);
    }
    fetchMyAPI();
  }, []);

  const DeleteItems = (id) => {
    let foundItem = -1;
    Industry.forEach((element) => {
      if (element.id === id) {
        foundItem = element.id;
      }
    });
    console.log(foundItem);
    setIndustry([
      ...Industry.slice(0, foundItem),
      ...Industry.slice(foundItem + 1),
    ]);
  };
  const transform = () => {
    return Industry?.map((i, index) => {
      return [
        <Link
          to={`products/${i.id}`}
          style={{ textDecoration: "none", color: "black", cursor: "pointer" }}
        >
          {i.name}
        </Link>,
        <a href={i.place_holder_image} style={{ cursor: "pointer" }}>
          <img
            src={i.place_holder_image}
            alt={i.place_holder_image}
            width="80px"
          />
        </a>,
        i.desc,
        i.price_aff,
        i.price_irt,
        i.rating,
        <IconButton onClick={(e) => DeleteItems(i.id)}>
          <DeleteIcon />
        </IconButton>,

        <Link to={`products/${i.id}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>,
      ];
    });
  };
  return (
    <>
      <PageTitle title="محصولات" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="لیست محصولات"
            data={transform(Industry)}
            columns={[
              "نام محصول",
              "عکس",
              "توضیحات",
              "ریال",
              "افغانی",
              "امتیاز",
              "حذف",
              "ویرایش",
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ProductList;
