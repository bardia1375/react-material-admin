import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { Box, IconButton, Link } from "@material-ui/core";
import Icon from "@mdi/react";

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";
import TestPage from "../../pages/test/testPage";
import IndustryList from "../../pages/IndustryList/IndustryList";
import CategoryList from "../../pages/CategoryList/CategoryList";
import CompaniesList from "../../pages/CompaniesList/CompaniesList";
import FormOfFactors from "../Form/FormOfFactors";
import IndustryForm from "../Form/IndustryForm";
import CategoryForm from "../Form/CategoryForm";
import User from "../../pages/User/User";
import TableofUser from "../../pages/User/TableofUser";
import UserList from "../../pages/User/UserList";
import ProductList from "../../pages/Product/ProductList";
import Product from "../../pages/Product/Product";
import NewProduct from "../../pages/NewProduct.js/NewProduct";
function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/typography" component={Typography} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/notifications" component={Notifications} />
            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/icons" component={Icons} />
            <Route path="/app/ui/charts" component={Charts} />
            <Route path="/app/test" component={TestPage} />
            <Route path="/app/user/:id" component={UserList} />
            <Route path="/app/user" component={TableofUser} />
            {/* <Route path="/app/user" component={UserList} /> */}
            <Route path="/app/industryList/:id" component={IndustryForm} />
            <Route path="/app/industryList" component={IndustryList} />
            <Route path="/app/categoryList/:id" component={CategoryForm} />
            <Route path="/app/categoryList" component={CategoryList} />
            <Route path="/app/companiesList" component={CompaniesList} />
            <Route path="/app/products/newproduct" component={NewProduct} />
            <Route path="/app/products/:id" component={Product} />
            <Route path="/app/products" component={ProductList} />
            <Route path="/app/:id" component={FormOfFactors} />
          
          </Switch>
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div>
              <Link
                color={"primary"}
                href={"https://flatlogic.com/"}
                target={"_blank"}
                className={classes.link}
              >
                Flatlogic
              </Link>
              <Link
                color={"primary"}
                href={"https://flatlogic.com/about"}
                target={"_blank"}
                className={classes.link}
              >
                About Us
              </Link>
              <Link
                color={"primary"}
                href={"https://flatlogic.com/blog"}
                target={"_blank"}
                className={classes.link}
              >
                Blog
              </Link>
            </div>
            <div>
              <Link
                href={"https://www.facebook.com/flatlogic"}
                target={"_blank"}
              >
                <IconButton aria-label="facebook">
                  <Icon path={FacebookIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              <Link href={"https://twitter.com/flatlogic"} target={"_blank"}>
                <IconButton aria-label="twitter">
                  <Icon path={TwitterIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              <Link href={"https://github.com/flatlogic"} target={"_blank"}>
                <IconButton aria-label="github" style={{ marginRight: -12 }}>
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
            </div>
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
