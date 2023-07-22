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
          <ListItem key={index} button component="a" href={certificado.link} target="_blank">
            <ListItemText primary={certificado.title} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
