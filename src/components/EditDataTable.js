import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import DataCell from './DataCell';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

class CustomizedTable extends React.Component {
  state = {
    isEditing: false,
    indexEditing: -1
  };

  toggleEditing(indexEditing) {
    this.setState(prevState => ({
      indexEditing,
      isEditing: !prevState.isEditing
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <DataCell data="Dessert (100g serving)" />
              <DataCell data="Calories" />
              <DataCell data="Fat (g)" />
              <DataCell data="Carbs (g)" />
              <DataCell data="Protein (g)" />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow className={classes.row} key={row.id}>
                  <DataCell
                    isEditing={
                      this.state.isEditing && this.state.indexEditing === index
                    }
                    data={row.name}
                    dataType="STRING"
                    toggleEditing={() => this.toggleEditing(index)}
                  />
                  <DataCell
                    isEditing={
                      this.state.isEditing && this.state.indexEditing === index
                    }
                    data={row.calories}
                    dataType="STRING"
                    toggleEditing={() => this.toggleEditing(index)}
                  />
                  <DataCell
                    isEditing={
                      this.state.isEditing && this.state.indexEditing === index
                    }
                    data={row.fat}
                    dataType="STRING"
                    toggleEditing={() => this.toggleEditing(index)}
                  />
                  <DataCell
                    isEditing={
                      this.state.isEditing && this.state.indexEditing === index
                    }
                    data={row.carbs}
                    dataType="STRING"
                    toggleEditing={() => this.toggleEditing(index)}
                  />
                  <DataCell
                    isEditing={
                      this.state.isEditing && this.state.indexEditing === index
                    }
                    data={row.protein}
                    dataType="STRING"
                    toggleEditing={() => this.toggleEditing(index)}
                  />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
