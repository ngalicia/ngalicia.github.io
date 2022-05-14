const {
  makeStyles,
  Drawer,
  Divider
} = MaterialUI;

const drawerWidth = 240;

const useStylesCajon = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
}));

const Cajon = (props) => {

  const classes = useStylesCajon();

  return (
    <Drawer
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
    >
      <div className={classes.toolbar} />
      <Divider />
      <Lista />
    </Drawer>
  )
}
