const {
  makeStyles, 
  Hidden
} = MaterialUI;

const useStylesContenedor = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Contenedor = () => {

  const classes = useStylesContenedor();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>

      <Navbar handleDrawerToggle={handleDrawerToggle} />

      <Hidden smUp implementation="css">
        <Cajon
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
        />
      </Hidden>

      <Hidden xsDown implementation="css">
        <Cajon
          variant='permanent'
          open={true}
        />
      </Hidden>

      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Post />
      </div>

    </div>
  );
}
