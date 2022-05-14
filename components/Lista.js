const {
  List,
  ListItem,
  ListItemText
} = MaterialUI;

const Lista = () => {

  return (
    <div>
      <List component='nav'>
        {certificados.map((certificado, index) => (
          <ListItem key={index} button component="a" href={certificado.link}>
            <ListItemText primary={certificado.title} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
