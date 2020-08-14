import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { ColorPalette, ColorButton } from 'material-ui-color';

import {
  saveCategory as saveAction,
  updateCategory as updateAction
} from '../../store/actions/category';
import { selectCategory } from '../../store/selectors/category';

const useStyle = makeStyles({
  root: {
    margin: 10,
    padding: 10
  },
  divider: {
    margin: 10
  },
  colorButton: {
    margin: 8
  }
});

const initialValues = {
  id: undefined,
  name: '',
  color: ''
};

const colorPalette = {
  'green': '#27ae60',
  'blue': '#2980b9',
  'purple': '#8e44ad',
  'red': '#e74c3c',
  'orange': '#f39c12',
  'grey': '#7f8c8d',
  'dark': '#2c3e50'
};

const CategoryForm = ({ category, saveCategory, updateCategory }) => {
  const [showPallete, setShowPallete] = useState(!category);
  const classes = useStyle();

  useEffect(() => {
    setShowPallete(!category);
  }, [
    category
  ]);

  function handleSubmit(values, { resetForm, setSubmitting }) {
    setSubmitting(true);
    const executeAction = values.id ? updateCategory : saveCategory;
    executeAction(values).then(() => {
      setSubmitting(false);
      resetForm();
    });
  }

  return (
    <Formik
      enableReinitialize
      initialValues={category || initialValues}
      onSubmit={handleSubmit}
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <React.Fragment>
          {isSubmitting && <LinearProgress />}

          <Paper
            component={Form}
            className={classes.root}
            square
          >
            <Grid spacing={4} container>
              <Grid md={8} xs={12} item>
                <Field
                  component={TextField}
                  name="name"
                  variant="outlined"
                  label="Name"
                  fullWidth
                />
              </Grid>

              <Grid md={4} xs={12} item>
                <Typography component="span">
                  {'Pick a color:'}
                </Typography>
                <br />
                {!showPallete && <ColorButton
                  className={classes.colorButton}
                  color={values.color}
                  onClick={() => setShowPallete(true)}
                />}
                {showPallete && <ColorPalette
                  palette={colorPalette}
                  onSelect={(color) => {
                    setFieldValue('color', colorPalette[color])
                    setShowPallete(false);
                  }}
                />}
              </Grid>
            </Grid>

            <Divider
              className={classes.divider}
              variant="middle"
            />

            <ButtonGroup>
              {
                values.id &&
                <Button
                  type="clear"
                  variant="contained"
                  color="secondary">
                  {'Cancel'}
                </Button>
              }

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {values.id ? 'Update' : 'Save'}
              </Button>
            </ButtonGroup>
          </Paper>
        </React.Fragment>
      )}
    </Formik>
  );
}

export default connect(selectCategory, {
  saveCategory: saveAction,
  updateCategory: updateAction
})(CategoryForm);
