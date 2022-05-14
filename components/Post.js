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
  Button
} = MaterialUI;

const useStylesPost = makeStyles(theme => ({
  card: {
    width: '18rem',
  },
}));

const Post = () => {

  const classes = useStylesPost();

  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={4} justify="center">
        {elementos.map((elemento, index) => (
          <Grid item key={index}>
            <Card className={classes.card}>
              <CardActionArea>
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
                  <Button size="small" color="primary" href={elemento.repository}>
                    Repositorio
                </Button>}
                {elemento.demo &&
                  <Button size="small" color="secondary" href={elemento.demo}>
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
