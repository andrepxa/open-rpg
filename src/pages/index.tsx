import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

const Homepage: NextPage = () => {
  return (
    <Container>
      <h1>Open RPG</h1>
      <Button color="primary" variant="contained">
        I'm a button
      </Button>
    </Container>
  )
}

export default Homepage
