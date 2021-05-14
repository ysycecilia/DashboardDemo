import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
//import AccountCircle from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";
import MuiAppbar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
  CardHeader
} from "reactstrap";
import { Calendar } from "react-date-range";
import { Line } from "react-chartjs-2";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

const drawerWidth = 240;

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 33, 41, 44, 65],
      fill: false,
      lineTension: 0,
      backgroundColor: "transparent",
      borderColor: "#007bff",
      borderWidth: 4,
      pointBackgroundColor: "#007bff"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      lineTension: 0,
      backgroundColor: "transparent",
      borderColor: "#006b9h",
      borderWidth: 4,
      pointBackgroundColor: "#007bff"
    }
  ]
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
  width: 10,
  height: 5,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "white"
  },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   transition: theme.transitions.create(["margin", "width"], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen
  //   })
  // },
  bottomRightBox: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },

  cardDeck: {
    position: "center",
    display: "flex",
    flexDirection: "row",
    padding: "80px 16px 0px 16px",
    width: "100%"
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
    // flexDirection: "row-reverse",
  },

  logo: {
    flexGrow: 1,
    position: "center"
  },

  info: {
    flexGrow: 1,
    textAlign: "end",
    color: "darkblue",
    width: "10px"
  },

  card: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "left-end",
    width: 50,
    margin: 10,
    maxWidth: "500px"
  },

  cardImg: {
    width: "60%",
    height: "100%",
    borderBottomRightRadius: "30%",
    borderTopRightRadius: "30%"
  },

  cardBody: {
    padding: "2rem 2rem"
  },

  line: {
    height: "400",
    width: "800"
  },

  chartCard: {
    margin: 25,
    flexGrow: 1,
    height: 600
  },

  calendarCard: {
    display: "flex"
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function Demo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Grid container>
          <MuiAppbar position="static">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open)}
              ></IconButton>

              <Grid item></Grid>
              <Grid item xs />

              <Grid item>
                <IconButton>
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg&usqp=CAU" />
                </IconButton>
              </Grid>

              <Grid item>
                <Typography variant="title">Welcome User!</Typography>
              </Grid>
            </Toolbar>
          </MuiAppbar>
        </Grid>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        // anchor="left"
        open={true}
        classes={{ paper: classes.drawerPaper }}
        style={{ color: "white" }}
      >
        <div
          className={classes.drawerHeader}
          style={{
            display: "flex",
            justifyContent: "center",
            color: "darkblue",
            fontSize: "25px"
          }}
        >
          LOGO HERE
        </div>
        <Divider />

        <List>
          {[
            "OPTION1",
            "OPTION2",
            "OPTION3",
            "OPTION4",
            "OPTION5",
            "OPTION6"
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <List>
          <ListItem
            button
            key="OPTION7"
            position="bottom"
            style={{ flex: 1, marginTop: "80%" }}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="OPTION7" />
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListItem
            button
            key="SETTING"
            style={{
              flex: 1,
              height: "50px",
              position: "relative",
              paddingBottom: "5%"
            }}
          >
            <ListItemIcon>{/* <GrDiamondIcon /> */}</ListItemIcon>

            <ListItemText primary="SETTING" />
          </ListItem>
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />

        <Button
          variant="contained"
          color="primary"
          component="span"
          className={classes.bottomLeftBox}
          style={{
            position: "absolute",
            right: 30,
            top: 100,
            height: 50,
            width: 180,
            borderRadius: 40
          }}
        >
          Upgrade
        </Button>

        <CardDeck className={classes.cardDeck}>
          <Card className={classes.card}>
            <CardImg
              className={classes.cardImg}
              variant="top"
              src="https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
            />
            <CardBody className={classes.cardBody}>
              <CardTitle tag="h5">245/500</CardTitle>
              <CardSubtitle tag="h8">ATTRIBUTE 1</CardSubtitle>
            </CardBody>
          </Card>

          <Card className={classes.card}>
            <CardImg
              className={classes.cardImg}
              variant="left"
              src="https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
              alt="Card image cap"
            />
            <CardBody className={classes.cardBody}>
              <CardTitle tag="h5">120 </CardTitle>
              <CardSubtitle tag="h8">ATTRIBUTE 2</CardSubtitle>
            </CardBody>
          </Card>

          <Card className={classes.card}>
            <CardImg
              className={classes.cardImg}
              top
              width="10%"
              src="https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
              alt="Card image cap"
            />
            <CardBody className={classes.cardBody}>
              <CardTitle tag="h5">125</CardTitle>
              <CardSubtitle tag="h8">ATTRIBUTE 3</CardSubtitle>
            </CardBody>
          </Card>

          <Card className={classes.card}>
            <CardImg
              className={classes.cardImg}
              top
              width="10%"
              src="https://www.wpbeginner.com/wp-content/uploads/2020/03/ultimate-small-business-resource-coronavirus.png"
              alt="Card image cap"
            />
            <CardBody className={classes.cardBody}>
              <CardTitle tag="h5">0</CardTitle>
              <CardSubtitle tag="h8">ATTRIBUTE 4</CardSubtitle>
            </CardBody>
          </Card>
        </CardDeck>

        <div className={classes.calendarCard}>
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </div>

        <Card className={classes.chartCard}>
          <CardHeader>
            <h5 className="h3 mb-0">Line chart</h5>
          </CardHeader>

          <CardBody>
            <div
              className="chart"
              style={{
                position: "relative",
                height: "40vh",
                width: "80vw"
                //position: "relative"
              }}
            >
              <Line
                data={data}
                className={classes.line}
                legend={legend}
                options={options}
              />
            </div>
          </CardBody>
        </Card>
        <footer
          style={{
            position: "relative",
            bottom: "1vh"
          }}
        >
          &copy; Copyright Cecilia Yuan 2021 All Rights Reserved
        </footer>
      </main>
    </div>
  );
}
