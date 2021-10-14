import React, { SetStateAction, useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RestaurantContext from '../../context/restaurants';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));


  function switchIndex(index:number):string{
    switch(index) {
      case 1:
        return 'Asiática'
      case 2:
        return 'Árabe'
      case 3:
        return 'Baiana'
      case 4:
        return 'Carnes'
      case 5:
        return 'Hamburguer'
      case 6:
        return 'Italiana'
      case 7:
        return 'Petiscos'
      case 8:
        return 'Sorvetes'
      case 0:
        return 'Todos'
      default:
        return "teste"
      }
  }

  function a11yProps(index:number) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  function TabPanel(props:any) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }


  export function ScrollableTabsButtonAuto(props:any) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const {setState: setGlobalState } = useContext(RestaurantContext)


    const handleChange:any = (event:Event, newValue:number) => {
      setValue(newValue);
      console.log(newValue)
      const category = switchIndex(newValue)
      setGlobalState({category})
      console.log(category)
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Todos" {...a11yProps(0)} />
            <Tab label="Asiática" {...a11yProps(1)} />
            <Tab label="Árabe" {...a11yProps(2)} />
            <Tab label="Baiana" {...a11yProps(3)} />
            <Tab label="Carnes" {...a11yProps(4)} />
            <Tab label="Hamburguer" {...a11yProps(5)} />
            <Tab label="Italiana" {...a11yProps(6)} />
            <Tab label="Petiscos" {...a11yProps(7)} />
            <Tab label="Sorvetes" {...a11yProps(8)} />
          </Tabs>
        </AppBar>

      </div>
    );
  }
