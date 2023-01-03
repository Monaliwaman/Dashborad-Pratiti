import React, { useEffect } from 'react'

// MetisMenu
import MetisMenu from 'metismenujs'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//i18n
import { withNamespaces } from 'react-i18next'
// import getstartedimg from "../../assets/images/dashboard-icons/get-started.svg";
import getstartedimg2 from '../../assets/images/dashboard-icons/customer.svg'
// import getstartedimg3 from "../../assets/images/dashboard-icons/categories.svg";
// import getstartedimg4 from "../../assets/images/dashboard-icons/product.svg";
// import getstartedimg5 from "../../assets/images/dashboard-icons/customer-plan.svg";
// import getstartedimg6 from "../../assets/images/dashboard-icons/delivery-heroes.svg";
// import getstartedimg7 from "../../assets/images/dashboard-icons/routes.svg";
import { connect } from 'react-redux'
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  FormGroup,
} from '../../redux/layout/actions'

const SidebarContent = (props) => {
  const dispatch = useDispatch()
  // const tokenRole = useSelector((state) => state.login.loginData.role);
  // const isActiveMenu = useSelector((state) => state.login);
  // const isActiveMenu = useSelector((state) => state.distributor.oneDistributer);
  // const tenantId = useSelector((state) => state.login.loginData.tenantId);
  // useEffect(() => {
  //     initMenu();
  // }, [])

  // useEffect(() => {
  //     initMenu();
  //     dispatch(getOneDistributor(tenantId));
  //     dispatch(
  //         setLoginDetailFromLocalstorage(
  //             JSON.parse(localStorage.getItem("authUser"))
  //         )
  //     );
  // }, []);

  const initMenu = () => {
    new MetisMenu('#side-menu')

    var matchingMenuItem = null
    var ul = document.getElementById('side-menu')
    var items = ul.getElementsByTagName('a')
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  }

  const activateParentDropdown = (item) => {
    item.classList.add('active')
    const parent = item.parentElement

    if (parent) {
      parent.classList.add('mm-active')
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add('mm-show')

        const parent3 = parent2.parentElement

        if (parent3) {
          parent3.classList.add('mm-active') // li
          parent3.childNodes[0].classList.add('mm-active') //a
          const parent4 = parent3.parentElement
          if (parent4) {
            parent4.classList.add('mm-active')
          }
        }
      }
      return false
    }
    return false
  }

  return (
    <React.Fragment>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title ">{props.t('')}</li>

          {/* <li>
                                    <Link to="/dashboard" className="waves-effect">
                                        <i className="ri-dashboard-line"></i>
                                        <span className="ml-1">{props.t('Dashboard')}</span>
                                    </Link>
                                </li> */}
          {/* {!isActiveMenu?.tenantDetails?.is_setup_complete ?
                                <li>
                                    <Link to="/#" className="has-arrow waves-effect">
                                        <img className="side-bar-icons" src={getstartedimg}/>
                                        <span className="ml-1">{props.t('Set Up Business')}</span>
                                    </Link>
                                    <ul className="sub-menu" aria-expanded="false">
                                        <li><Link to="/howtosetup">{props.t('How It Work')}</Link></li>
                                        <li><Link to="/setup">{props.t('Set Up')}</Link></li>
                                    </ul>
                                </li> : */}
          <>
            <li>
              <Link to="/dashboard" className=" waves-effect">
                <img className="side-bar-icons" src={getstartedimg2} />
                <span className="ml-1">{props.t('Dashboard')}</span>
              </Link>
            </li>
            <li>
              <Link to="/user" className=" waves-effect">
                <img className="side-bar-icons" src={getstartedimg2} />
                <span className="ml-1">{props.t('User')}</span>
              </Link>
            </li>
            <li>
              <Link to="/Vendor" className=" waves-effect">
                <img className="side-bar-icons" src={getstartedimg2} />
                <span className="ml-1">{props.t('Vendor')}</span>
              </Link>
            </li>
            <li>
              <Link to="/asset" className=" waves-effect">
                <img className="side-bar-icons" src={getstartedimg2} />
                <span className="ml-1">{props.t('Asset')}</span>
              </Link>
            </li>
            <li>
              <Link to="/employee" className=" waves-effect">
                <img className="side-bar-icons" src={getstartedimg2} />
                <span className="ml-1">{props.t('Employee')}</span>
              </Link>
            </li>
            <li>
              <Link to="/assignment" className=" waves-effect">
                <img className="side-bar-icons" src={getstartedimg2} />
                <span className="ml-1">{props.t('Assignment')}</span>
              </Link>
            </li>

            {/* 
                                <li>
                                    <Link to="/categories" className=" waves-effect">
                                    <img className="side-bar-icons" src={getstartedimg3}/>
                                        <span className="ml-1">{props.t('Categories')}</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/products" className=" waves-effect">
                                    <img className="side-bar-icons" src={getstartedimg4}/>
                                        <span className="ml-1">{props.t('Products')}</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/customer-plan" className=" waves-effect">
                                    <img className="side-bar-icons" src={getstartedimg5}/>
                                        <span className="ml-1">{props.t('Customer Plan')}</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/delivery-persons" className=" waves-effect">
                                    <img className="side-bar-icons" src={getstartedimg6}/>
                                        <span className="ml-1">{props.t('Delivery persons')}</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/routes" className=" waves-effect">
                                    <img className="side-bar-icons" src={getstartedimg7}/>
                                        <span className="ml-1">{props.t('Routes')}</span>
                                    </Link>
                                </li> */}
          </>
          {/* } */}

          {/* <li>
                                    <Link to="/settings" className=" waves-effect">
                                        <i className="ri-settings-4-line"></i>
                                        <span className="ml-1">{props.t('Settings')}</span>
                                    </Link>
                                </li> */}
        </ul>
      </div>
    </React.Fragment>
  )
}

const mapStatetoProps = (state) => {
  return { ...state.layout }
}

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader,
  })(withNamespaces()(SidebarContent)),
)
