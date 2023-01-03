import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  toggleRightSidebar,
  changeTopbarTheme,
  changeLayoutWidth,
} from '../../redux/layout/actions'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Rightbar from '../CommonForBoth/Rightbar'
const Layout = (props) => {
  const [isMobile, setIsMobile] = useState(
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
  )

  const toggleRightSidebar = () => {
    props.toggleRightSidebar()
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }


  useEffect((prevProps) => {
    if (prevProps !== props) {
      if (props.isPreloader === true) {
        document.getElementById('preloader').style.display = 'block'
        document.getElementById('status').style.display = 'block'

        setTimeout(function () {
          document.getElementById('preloader').style.display = 'none'
          document.getElementById('status').style.display = 'none'
        }, 2500)
      } else {
        document.getElementById('preloader').style.display = 'none'
        document.getElementById('status').style.display = 'none'
      }
    }
  }, [])

  useEffect(() => {
    // Scroll Top to 0
    window.scrollTo(0, 0)
    let currentage = capitalizeFirstLetter(props.location.pathname)

    document.title = currentage + ' | PRATITI TECHNOLOGIES'
    if (props.leftSideBarTheme) {
      props.changeSidebarTheme(props.leftSideBarTheme)
    }

    if (props.layoutWidth) {
      props.changeLayoutWidth(props.layoutWidth)
    }

    if (props.leftSideBarType) {
      props.changeSidebarType(props.leftSideBarType)
    }
    if (props.topbarTheme) {
      props.changeTopbarTheme(props.topbarTheme)
    }

    if (props.showRightSidebar) {
      this.toggleRightSidebar()
    }
  }, [])

  const toggleMenuCallback = () => {
    if (props.leftSideBarType === 'default') {
      props.changeSidebarType('condensed', isMobile)
    } else if (props.leftSideBarType === 'condensed') {
      props.changeSidebarType('default', isMobile)
    }
  }
  
  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <i className="ri-loader-line spin-icon"></i>
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header
          toggleMenuCallback={toggleMenuCallback}
          toggleRightSidebar={toggleRightSidebar}
        />
        <Sidebar
          theme={props.leftSideBarTheme}
          type={props.leftSideBarType}
          isMobile={isMobile}
        />
        <div className="main-content">
          {props.children}
          <Footer />
        </div>
      </div>
      <Rightbar />
    </React.Fragment>
  )
}

const mapStatetoProps = (state) => {
  return {
    ...state.layout,
  }
}
export default connect(mapStatetoProps, {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  toggleRightSidebar,
  changeTopbarTheme,
  changeLayoutWidth,
})(withRouter(Layout))
