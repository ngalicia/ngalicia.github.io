const {
  makeStyles,
  Grid,
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Dialog
} = MaterialUI;

const useStylesPost = makeStyles(theme => ({
  card: {
    width: '18rem',
  },
  button: {
    backgroundColor: '#f2f2f2',
    '&:hover': {
      color: '#1e1e1e',
      backgroundColor: '#cccccc',
    }
  },
}));

const Post = () => {

  const classes = useStylesPost();

  const [imagen, setImagen] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleOpen = (ima) => {
    setOpen(true);
    setImagen(ima);
  }
  
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={'md'}
      >
        <img
          src={imagen}
          alt="Image"
        />
      </Dialog>
      
      <Grid container spacing={4} justify="center">
        {elementos.map((elemento, index) => (
          <Grid item key={index}>
            <Card className={classes.card}>
              <CardActionArea onClick={() => handleOpen(elemento.image)}>
                <CardMedia
                  component="img"
                  alt="Image"
                  height="140"
                  image={elemento.image}
                  title="Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {elemento.title}
                  </Typography>
                  <Typography component="p">{elemento.description}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {elemento.repository &&
                  <Button className={classes.button} size="small" color="primary" href={elemento.repository} target="_blank">
                    Repositorio
                </Button>}
                {elemento.demo &&
                  <Button className={classes.button} size="small" color="secondary" href={elemento.demo} target="_blank">
                    Demo
                </Button>}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
