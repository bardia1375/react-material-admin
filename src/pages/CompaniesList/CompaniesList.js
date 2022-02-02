import { Grid, Table } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import axios from "axios";
import { mdiCogSyncOutline } from "@mdi/js";
import { Link } from "react-router-dom";
function CompaniesList() {
  const [Industry, setIndustry] = useState();
  //   useEffect(() => {
  //     axios.get("http://nahoor.af:8080/nahoor/industry/").then((response) => {
  //       setIndustry(response.data);
  //     });
  //   }, []);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get("http://nahoor.af:8080/nahoor/company/");
      setIndustry(response.data);
    }

    fetchMyAPI();
  }, []);

  const transform = () => {
    return Industry?.map((i) => {
      console.log()
      return [
        <Link
          to={`${i.id}`}
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
        >
          {i.name}
        </Link>,
        <a href={i.banner_image}>
          <img
            src={i.banner_image}
            alt={i.banner_image}
            width="100px"
            height="60px"
          />
        </a>,
        <a href={i.logo_image}>
          <img src={i.logo_image} alt={i.logo_image} width="60px" />
        </a>,

        // i.short_desc,
        // i.long_desc,
        // i.address,
        i.tel,
        i.email,
        i.website,
        i.instagram,
        i.linkedin,
        i.twitter,
        i.video,
        
      ];
    });
  };
  return (
    <div>
      <PageTitle title="کارخانجات" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="لیست کارخانجات"
            data={transform(CompaniesList)}
            columns={[
              "نام کارخانه",
              "عکس",
              "لوگو",
              // "توضیحات کوتاه",
              // "توضیحات بلند",
              // "آدرس",
              "تلفن",
              "ایمیل",
              "وبسایت",
              "اینستاگرام",
              "لینکداین",
              "توییتر",
              "ویدیو",
            ]}
            // options={{
            //   filterType: "checkbox",
            // }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CompaniesList;
