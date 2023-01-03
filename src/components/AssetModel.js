import React from 'react'
import {
  Box,
  DialogActions,
  TextField,
  DialogContent,
  Dialog,
  DialogTitle,
  Button,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from '@material-ui/core'
//import { useSelector } from 'react-redux'

const AssetModel = ({
  open,
  handleClose,
  isView,
  handleInputChange,
  values,
  isEdit,
  editAsset,
  addModelAsset,
}) => {
  const [vendor, setVendor] = React.useState('')
  const [asset, setAsset] = React.useState('')
  const [category, setCategory] = React.useState('')
  //const assetType = useSelector((state) => state.assetType.assets)

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {isEdit ? 'Edit Asset' : isView ? 'Asset Details' : 'ADD ASSET'}
      </DialogTitle>
      <DialogContent direction={'column'} spacing={5}>
        <TextField
          className="text-field"
          style={{ marginTop: '5px' }}
          autoFocus
          margin="dense"
          id="name"
          label="Serial No"
          type="name"
          fullWidth
          name="serialNo"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          required
          value={values.serialNo}
          onChange={handleInputChange}
        />
        <TextField
          className="text-field"
          // autoFocus
          margin="dense"
          id="make"
          label="Make"
          fullWidth
          name="make"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          required
          value={values.make}
          onChange={handleInputChange}
        />
        <TextField
          className="text-field"
          //autoFocus
          margin="dense"
          id="model"
          label="Model"
          type="name"
          fullWidth
          name="model"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          required
          value={values.model}
          onChange={handleInputChange}
        />
        <Box className="text-field">
          {!isView ? (
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="demo-simple-select-label">Vendor</InputLabel>
              <Select
                fullWidth
                //autoFocus
                margin="dense"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Vendor"
                name="vendor"
                value={isEdit ? values.vendor : vendor}
                onChange={(e) => {
                  handleInputChange(e)
                  setVendor(e.target.value)
                }}
              >
                <MenuItem value={'Monali Waman'}>Monali Waman</MenuItem>
                <MenuItem value={'Sonali Waman'}>Sonali Waman</MenuItem>
                <MenuItem value={'Rahul Waman'}>Rahul Waman</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <TextField
              className="text-field"
              margin="dense"
              label="Vendor"
              fullWidth
              variant={!isView ? 'outlined' : 'standard'}
              disabled={!isView ? false : true}
              required
              value={values.vendor}
            />
          )}
        </Box>

        <TextField
          className="text-field"
          //autoFocus
          margin="dense"
          id="date"
          label="Procurement Date"
          type="name"
          fullWidth
          name="procurementDate"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          required
          value={values.procurementDate}
          onChange={handleInputChange}
        />
        <TextField
          className="text-field"
          //autoFocus
          margin="dense"
          id="date"
          label="Retired date"
          type="name"
          fullWidth
          name="retiredDate"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          required
          value={values.retiredDate}
          onChange={handleInputChange}
        />
        <TextField
          className="text-field"
          //autoFocus
          margin="dense"
          multiline //increase Description height
          rows={3} //increase Description height
          maxRows={20} //increase Description height
          id="name"
          label="Description"
          type="name"
          fullWidth
          name="description"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          required
          value={values.description}
          onChange={handleInputChange}
        />

        <TextField
          className="text-field"
          //autoFocus
          margin="dense"
          id="name"
          label="RAM"
          type="ram"
          fullWidth
          name="ram"
          variant={!isView ? 'outlined' : 'standard'}
          disabled={!isView ? false : true}
          required
          value={values.ram}
          onChange={handleInputChange}
        />

        {!isView ? (
          <FormControl
            className="mt-3"
            variant={!isView ? 'outlined' : 'standard'}
            fullWidth
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Type Of Asset
            </InputLabel>
            {/* {assetsData?.list?.map((asset, index) => { */}
            <Select
              margin="dense"
              fullWidth
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={isEdit ? values.typeOfAsset : asset}
              onChange={(e) => {
                handleInputChange(e)
                setAsset(e.target.value)
              }}
              label="Type Of Asset"
              name="typeOfAsset"
            >
              {/* <MenuItem value="Ten">
                <em>None</em>
              </MenuItem> */}
              {/* <MenuItem value={'name'}>Laptop</MenuItem>
                <MenuItem value={'name'}>Desktop</MenuItem> */}
              {/*<MenuItem value={'table'}>Table</MenuItem>
              <MenuItem value={'chair'}>Chair</MenuItem>
              <MenuItem value={'laptopBags'}>Laptop Bags</MenuItem>
              <MenuItem value={'mouse'}>Mouse</MenuItem>
              <MenuItem value={'keyboard'}>Keyboard</MenuItem>
              <MenuItem value={'bottles'}>Bottles</MenuItem >*/}
            </Select>
          </FormControl>
        ) : (
          <TextField
            className="text-field"
            margin="dense"
            label="Type Of Asset"
            fullWidth
            variant={!isView ? 'outlined' : 'standard'}
            disabled={!isView ? false : true}
            value={values.typeOfAsset}
            // onChange={handleInputChange}
          />
        )}
        <FormControl
          className="mt-3"
          variant={!isView ? 'outlined' : 'standard'}
          fullWidth
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          {!isView ? (
            <Select
              margin="dense"
              fullWidth
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={isEdit ? values.category : category}
              onChange={(e) => {
                handleInputChange(e)
                setCategory(e.target.value)
              }}
              label="Category"
              name="category"
            >
              <MenuItem value="Ten">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'rented'}>Rented</MenuItem>
              <MenuItem value={'purchase'}>Purchase</MenuItem>
            </Select>
          ) : (
            <TextField
              className="text-field"
              margin="dense"
              label="category"
              fullWidth
              variant={!isView ? 'outlined' : 'standard'}
              disabled={!isView ? false : true}
              value={values.category}
            />
          )}
        </FormControl>

        <FormControl style={{ marginTop: '10px' }}>
          <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
          {!isView ? (
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="status"
                name="status"
                onChange={handleInputChange}
                value={values.status}
              >
                <FormControlLabel
                  value="Active"
                  control={<Radio />}
                  label={<div style={{ fontSize: '1rem' }}>Active</div>}
                  labelPlacement="active"
                />

                <FormControlLabel
                  value="InActive"
                  control={<Radio />}
                  label={<div style={{ fontSize: '1rem' }}>InActive</div>}
                  labelPlacement="InActive"
                />
              </RadioGroup>
            </FormControl>
          ) : (
            <dive>{values.status}</dive>
          )}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        {!isView && (
          <Button onClick={!isEdit ? addModelAsset : editAsset}>
            {!isEdit ? 'Add Asset' : 'Edit Asset'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default AssetModel
