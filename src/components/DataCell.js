import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';

const DATA_TYPES = {
  STRING: 'STRING',
  INTEGER: 'INTEGER',
  FLOAT: 'FLOAT',
  SELECTION: 'SELECTION'
};

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const DataCell = props => {
  const { isEditing, dataType, data, selectOptions, toggleEditing } = props;
  return (
    <CustomTableCell component="th" scope="row" onClick={toggleEditing}>
      {isEditing && (
        <TextField
          onBlur={toggleEditing}
          id="name"
          placeholder="Name"
          value={data}
          fullWidth
          margin="normal"
        />
      )}
      {!isEditing && data}
    </CustomTableCell>
  );
};

DataCell.propTypes = {
  isEditable: PropTypes.bool,
  isEditing: PropTypes.bool,
  dataType: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
  selectOptions: PropTypes.array,
  toggleEditing: PropTypes.func
};

DataCell.defaultProps = {
  isEditable: false,
  isEditing: false,
  selectOptions: PropTypes.array.isRequired
};

export default DataCell;
