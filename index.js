const {
  createMuiTheme,
  colors,
  ThemeProvider,
  CssBaseline,
  Typography,
  Link
} = MaterialUI;

const drawerWidth = 240;

const useStylesIndex = makeStyles((theme) => ({
  footer: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
    },
    padding: theme.spacing(3),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f76bf',
    },
    secondary: {
      main: '#8f8f8f',
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

const Copyright = () => {

  const classes = useStylesIndex();

  return (
    <div className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Portafolio
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Contenedor />
    <Copyright />
  </ThemeProvider>,
  document.querySelector('#root')
);
