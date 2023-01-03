// @flow
import { layoutTypes } from './actionTypes'

const INIT_STATE = {
  layoutType: 'vertical',
  layoutWidth: 'fluid',
  leftSideBarTheme: 'dark',
  leftSideBarType: 'default',
  topbarTheme: 'light',
  isPreloader: false,
  showRightSidebar: false,
  isMobile: false,
  confirmationData: {
    model: false,
    params: null,
  },
}

const layoutReducer = (state = INIT_STATE, action) => {
  console.log('action.payload', action)
  switch (action.type) {
    case layoutTypes.CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: action.payload,
      }
    case layoutTypes.CHANGE_PRELOADER:
      return {
        ...state,
        isPreloader: action.payload,
      }

    case layoutTypes.CHANGE_LAYOUT_WIDTH:
      return {
        ...state,
        layoutWidth: action.payload.width,
      }
    case layoutTypes.CHANGE_SIDEBAR_THEME:
      return {
        ...state,
        leftSideBarTheme: action.payload.theme,
      }
    case layoutTypes.CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        leftSideBarType: action.payload.sidebarType,
      }
    case layoutTypes.CHANGE_TOPBAR_THEME:
      return {
        ...state,
        topbarTheme: action.payload,
      }
    case layoutTypes.TOGGLE_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: !state.showRightSidebar,
      }
    case layoutTypes.SHOW_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: true,
      }
    case layoutTypes.HIDE_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: false,
      }
    // Confirm
    case layoutTypes.CONFIRM_MODEL_ON:
      return {
        ...state,
        confirmationData: action.payload,
      }

    case layoutTypes.CONFIRM_MODEL_OFF:
      return {
        ...state,
        confirmationData: INIT_STATE.confirmationData,
      }
    default:
      return state
  }
}

export default layoutReducer
