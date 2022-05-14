const {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} = MaterialUI;

const useStylesNavbar = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {

  const classes = useStylesNavbar();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          ☰
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Portafolio
        </Typography>
        <Button color="inherit" href="/">Inicio</Button>
      </Toolbar>
    </AppBar>
  );
}
