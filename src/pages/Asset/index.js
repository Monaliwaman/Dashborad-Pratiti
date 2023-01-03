import {
  Box,
  Card,
  Grid,
  TableHead,
  Divider,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  //IconButton,
  Button,
  Icon,
} from '@material-ui/core'
import React from 'react'
import { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';
//import MenuItem from '@mui/material/MenuItem';
import '../../assets/scss/asset_page.scss'
import AssetModel from '../../components/AssetModel'
import {
  getAssets,
  getAssetType,
  handleAddAssetData,
  handleEditAsset,
} from '../../redux/asset/actions'
import { objectsDifference } from '../../utils'

const initialAssetData = {
  serialNo: '',
  make: '',
  model: '',
  vendor: '',
  procurementDate: '', //don't show
  retiredDate: '', //don't show
  description: '', //don't show
  ram: '',
  typeOfAsset: '',
  category: '',
  status: 'Active',
  Action: '',
}
const Asset = () => {
  const [isModal, setIsModal] = useState(false)
  const [assetData, setAssetData] = useState(initialAssetData)
  const assetsData = useSelector((state) => state.asset.assets)
  const [isEdit, setIsEdit] = useState(false)
  const [isView, setIsView] = useState(false)
  const dispatch = useDispatch()

  const handleClose = () => {
    setIsModal(!isModal)
  }
  const toggle = () => {
    setIsModal(!isModal)
    if (isModal && isEdit) {
      setAssetData(initialAssetData)
      setIsEdit(false)
    }
  }

  const handleAddAsset = () => {
    if (isView) {
      setAssetData(initialAssetData)
    }
    setAssetData(initialAssetData)
    setIsEdit(false)
    setIsView(false)
    toggle()
  }

  const handleInputChange = (e) => {
    let { name, value } = e.target
    console.log('value', value)

    setAssetData({
      ...assetData,
      [name]: value,
    })
  }

  const submitAddAsset = (e) => {
    e.preventDefault()
    console.log('assetData', assetData)

    // setAssetData(initialAssetData)

    dispatch(handleAddAssetData(assetData))
    setAssetData(initialAssetData)
    toggle()
    // setValue('')
    // setSelectedData([])
  }

  const editAssetDetails = (e) => {
    e.preventDefault()
    const { id } = assetData
    const oldData = assetsData?.list?.find((item) => item.id === id)
    const data = objectsDifference(assetData, oldData)
    dispatch(handleEditAsset(id, data))
    toggle()
    setIsEdit(false)
    setAssetData(initialAssetData)
  }

  const handleEdit = (asset) => {
    setAssetData(asset)
    setIsView(false)
    setIsEdit(true)
    toggle()
  }

  const handleView = (asset) => {
    setIsView(true)
    setIsEdit(false)
    setAssetData(asset)
    toggle()
  }

  useEffect(() => {
    dispatch(getAssets())
  }, [dispatch])

  useEffect(() => {
    dispatch(getAssetType())
  }, [dispatch])

  return (
    <Fragment>
      <AssetModel
        open={isModal}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
        addModelAsset={submitAddAsset}
        editAsset={editAssetDetails}
        values={assetData}
        isEdit={isEdit}
        isView={isView}
        // setValue={setValue}
      />
      <Box className="page-content">
        <Card p={3} className="card">
          <Grid container item xs={12} className="update-title">
            <Grid container item xs={10}>
              <Typography
                variant="h6"
                style={{ fontWeight: '700', textIndent: '25px ' }}
              >
                Asset Management
              </Typography>
            </Grid>
            <Grid container item xs={2}>
              <Button
                style={{
                  marginBottom: '10px',
                  height: '45px',
                  //marginBottom: '10px',
                  //marginTop: '10px',
                  background: '#4294e8',
                  color: 'white',
                  fontWeight: '600',
                }}
                variant="contained"
                className="button"
                onClick={handleAddAsset}
              >
                Add New Asset
              </Button>
            </Grid>
          </Grid>
          <Divider />
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="asset-table">
                <TableCell align="center" className="asset-text">
                  Serial No.
                </TableCell>
                <TableCell align="center" className="asset-text">
                  Make
                </TableCell>
                <TableCell align="center" className="asset-text">
                  Model
                </TableCell>
                <TableCell align="center" className="asset-text">
                  Vendor
                </TableCell>
                <TableCell align="center" className="asset-text">
                  RAM
                </TableCell>
                <TableCell align="center" className="asset-text">
                  Asset
                </TableCell>
                <TableCell align="center" className="asset-text">
                  Category
                </TableCell>
                <TableCell align="center" className="asset-text">
                  Status
                </TableCell>
                <TableCell align="center" className="asset-text">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assetsData?.list?.map((asset, index) => {
                return (
                  <TableRow>
                    <TableCell
                      align="center"
                      componenelt="th"
                      scope="row"
                      className="text-capital"
                    >
                      {asset.serialNo}
                    </TableCell>
                    <TableCell align="center">{asset.make}</TableCell>
                    <TableCell align="center">{asset.model}</TableCell>
                    <TableCell align="center">{asset.vendor}</TableCell>
                    <TableCell align="center">{asset.ram}</TableCell>
                    <TableCell align="center">{asset.typeOfAsset}</TableCell>
                    <TableCell align="center">{asset.category}</TableCell>
                    <TableCell align="center">{asset.status}</TableCell>
                    <TableCell align="center">
                      {
                        <div className="">
                          <Icon
                            onClick={() => handleView(asset)}
                            className="mdi mdi-eye font-size-18 mr-3"
                            // color="primary"
                            style={{ color: 'green' }}
                          />
                          <Icon
                            onClick={() => handleEdit(asset)}
                            className="mdi mdi-pencil font-size-18 "
                            color="primary"
                          />
                        </div>
                      }
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Card>
      </Box>
    </Fragment>
  )
}

export default Asset
