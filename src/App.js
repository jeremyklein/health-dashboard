import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid'
import { allergies, observations, medications } from "./fhir_examples";
import { AllergyTable, ObservationTable, MedicationTable } from "fhir-ui";
import Badge from '@material-ui/core/Badge'
// import { FhirResource, fhirVersions } from 'fhir-react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const drawerWidth = 240;

let counts = {}
counts["Allergies"] = allergies.length
counts["Medications"] = medications.length
counts["Observations"] = observations.length



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Personal Health Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          {/*<img src = "https://via.placeholder.com/100x150" alt="logo"/>*/}
          <Divider />
          <List>
            {['Allergies', 'Observations', 'Medications'].map((text, index) => (
              <ListItem button key={text} href={'/'+text}>
                <Badge color={"primary"} badgeContent={counts[text]}>
                  <Link to={'/'+text}>{text}</Link>
                </Badge>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/Allergies">
                  <AllergyTable
                    allergies={allergies}
                    hideCheckboxes={true}
                    hideActionIcons={true}
                    tableTitle="Allergy Table"
                  />
            </Route>
            <Route path="/Observations">
              <ObservationTable
                observations={observations}
                hideCheckboxes={true}
                hideActionIcons={true}
              />
            </Route>
            <Route path="/Medications">
              <MedicationTable
                medications={medications}
                tableTitle="Medication Table"
                hideCheckboxes={true}
                hideActionIcons={true}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

