import { Grid, Table } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import axios from "axios";
import { mdiCogSyncOutline } from "@mdi/js";
import { Link } from "react-router-dom";
function CategoryList() {
  const [Category, setCategory] = useState();
  //   useEffect(() => {
  //     axios.get("http://nahoor.af:8080/nahoor/industry/").then((response) => {
  //       setIndustry(response.data);
  //     });
  //   }, []);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get("http://nahoor.af:8080/nahoor/category/");
      setCategory(response.data);
    }
    fetchMyAPI();
  }, []);

  const transform = () => {
    return Category?.map((i) => {
      return [
        <Link
          to={`/app/categoryList/${i.id}`}
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
        >
          {i.name}
        </Link>,
        <a href={i.icon_image}>
          <img src={i.icon_image} width="60px" />
        </a>,
        <a href={i.thumbnail_image}>
          <img src={i.thumbnail_image} width="80px" />
        </a>,
        
      ];
    });
  };
  return (
    <div>
      <PageTitle title="زیر صنایع" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="لیست زیر صنایع"
            data={transform(Category)}
            columns={["نام صنعت", "Icon", "عکس تامنیل"]}
            // options={{
            //   filterType: "checkbox",
            // }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CategoryList;
