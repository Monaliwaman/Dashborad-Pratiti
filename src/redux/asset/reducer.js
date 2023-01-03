// @flow
import { assetTypes } from './actionTypes'
import { INIT_STATE } from './initialState'

const assetReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    // Get Assets
    case assetTypes.GET_ASSETS_REQUEST:
      console.log('6734214216', action.payload)
      return { ...state, assets: { ...state.assets, isFetching: true } }

    case assetTypes.GET_ASSETS_SUCCESS:
      return {
        ...state,
        assets: {
          ...state.assets,
          list: action.payload,
          // totalRecords: action.payload.total_records,
          isFetching: false,
          isError: false,
        },
      }

    case assetTypes.GET_ASSETS_ERROR:
      return {
        ...state,
        assets: { ...state.assets, isFetching: false, isError: true },
      }

    // Get AssetType
    case assetTypes.GET_ASSETTYPE_REQUEST:
      console.log('6734214216', action.payload)
      return { ...state, assets: { ...state.assets, isFetching: true } }

    case assetTypes.GET_ASSETTYPE_SUCCESS:
      return {
        ...state,
        assets: {
          ...state.assets,
          assetType: action.payload,
          isFetching: false,
          isError: false,
        },
      }

    case assetTypes.GET_ASSETTYPE_ERROR:
      return {
        ...state,
        assets: { ...state.assets, isFetching: false, isError: true },
      }

    // Post Assets
    case assetTypes.ADD_ASSETS_REQUEST:
      return { ...state, assets: { ...state.assets, isFetching: true } }

    case assetTypes.ADD_ASSETS_SUCCESS:
      return {
        ...state,
        assets: {
          list: state.assets.list?.length
            ? [action.payload, ...state.assets.list]
            : [action.payload],
          isFetching: false,
          isError: false,
        },
      }

    case assetTypes.ADD_ASSETS_ERROR:
      return {
        ...state,
        assets: { ...state.assets, isFetching: false, isError: true },
      }

    // Put Assets
    case assetTypes.EDIT_ASSETS_REQUEST:
      return { ...state, assets: { ...state.assets, isFetching: true } }

    case assetTypes.EDIT_ASSETS_SUCCESS:
      const index = state.assets.list.findIndex(
        (x) => x.id === action.payload.id,
      )
      state.assets.list.splice(index, 1, action.payload)
      return {
        ...state,
        assets: {
          list: [...state.assets.list],
          isFetching: false,
          isError: false,
        },
      }

    case assetTypes.EDIT_ASSETS_ERROR:
      return {
        ...state,
        assets: { ...state.assets, isFetching: false, isError: true },
      }

    // Delete Assets
    // case assetTypes.DELETE_ASSETS_REQUEST:
    //   return { ...state, assets: { ...state.assets, isFetching: true } }

    // case assetTypes.DELETE_ASSETS_SUCCESS:
    //   const assets = state.assets.list.filter(
    //     (asset) => asset.id !== action.payload,
    //   )
    //   return {
    //     ...state,
    //     assets: { list: assets },
    //     isFetching: false,
    //     isError: false,
    //   }

    // case assetTypes.DELETE_ASSETS_ERROR:
    //   return {
    //     ...state,
    //     assets: { ...state.assets, isFetching: false, isError: true },
    //   }

    // case assetTypes.DELETE_MULTIPLE_ASSETS_REQUEST:
    // 	return { ...state, assets: { ...state.assets, isFetching: true } };

    // case assetTypes.DELETE_MULTIPLE_ASSETS_SUCCESS:
    // 	const assets1 = state.assets.list.filter((asset) => !action.payload.includes(asset._id))
    // 	return { ...state, assets: { list: assets1 }, isFetching: false, isError: false }

    // case assetTypes.DELETE_MULTIPLE_ASSETS_ERROR:
    // 	return {
    // 		...state,
    // 		assets: { ...state.assets, isFetching: false, isError: true }
    // 	};

    // Get Route name
    // case assetTypes.GET_ROUTENAME_REQUEST:
    // 	return { ...state, route: { ...state.route, isFetching: true } };

    // case assetTypes.GET_ROUTENAME_SUCCESS:
    // 	return {
    // 		...state,
    // 		route: { ...state.route, list: action.payload, isFetching: false, isError: false }
    // 	};

    // case assetTypes.GET_ROUTENAME_ERROR:
    // 	return {
    // 		...state,
    // 		route: { ...state.route, isFetching: false, isError: true }
    // 	};

    // Get Excel sheet
    // case assetTypes.POST_EXELSHEET_REQUEST:
    // 	return { ...state, excelData: { ...state.excelData, isFetching: true } };

    // case assetTypes.POST_EXELSHEET_SUCCESS:
    // 	return {
    // 		...state,
    // 		excelData: { ...state.excelData, list: action.payload, isFetching: false, isError: false }
    // 	};

    // case assetTypes.POST_EXELSHEET_ERROR:
    // 	return {
    // 		...state,
    // 		excelData: { ...state.excelData, isFetching: false, isError: true }
    // 	};

    default:
      return state
  }
}

export default assetReducer
