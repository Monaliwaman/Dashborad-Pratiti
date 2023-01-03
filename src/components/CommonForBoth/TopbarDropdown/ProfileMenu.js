import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//i18n
import { withNamespaces } from "react-i18next";

// users
// import avatar2 from "../../../assets/images/users/avatar-2.jpg";
// import { useSelector, useDispatch } from 'react-redux';
// import { setLoginDetailFromLocalstorage } from "../../../redux/login/actions";

const ProfileMenu = (props) => {
  const [menu, setMenu] = useState(false)
  // const login = useSelector(state => state.login?.loginData?.name);
  // const dispatch = useDispatch();
  const toggle = () => {
    setMenu(!menu);
  }
  // useEffect(() => {
  //   dispatch(
  //     setLoginDetailFromLocalstorage(
  //       JSON.parse(localStorage.getItem("authUser"))
  //     )
  //   );
  // }, []);


    return (
      <React.Fragment>
        <Dropdown
          isOpen={menu}
          toggle={toggle}
          className="d-inline-block user-dropdown"
        >
          <DropdownToggle
            tag="button"
            className="btn header-item waves-effect"
            id="page-header-user-dropdown"
          >
            {/* <img
              className="rounded-circle header-profile-user mr-1"
              src={avatar2}
              alt="Header Avatar"
            /> */}
            <span className="font-weight-medium text-primary">
              {/* {login?.toUpperCase()} */}
            </span>
            <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i>
          </DropdownToggle>
          <DropdownMenu right>
            {/* <DropdownItem href="#">
              <i className="ri-user-line align-middle mr-1"></i>{" "}
              {props.t("Profile")}
            </DropdownItem> */}
            {/* <DropdownItem href="#">
              <i className="ri-wallet-2-line align-middle mr-1"></i>{" "}
              {this.props.t("My Wallet")}
            </DropdownItem>
            <DropdownItem className="d-block" href="#">
              <span className="badge badge-success float-right mt-1">11</span>
              <i className="ri-settings-2-line align-middle mr-1"></i>{" "}
              {this.props.t("Settings")}
            </DropdownItem>
            <DropdownItem href="#">
              <i className="ri-lock-unlock-line align-middle mr-1"></i>{" "}
              {this.props.t("Lock screen")}
            </DropdownItem> */}
            {/* <DropdownItem divider /> */}
            <DropdownItem className="text-danger" href="/logout">
              <i className="ri-shut-down-line align-middle mr-1 text-danger"></i>{" "}
              {props.t("Logout")}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }

export default withNamespaces()(ProfileMenu);
