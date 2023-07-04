import { Component } from 'react'
import Card from './card'

class App extends Component {
  render() {
    const articles = [
      {
        title: 'Oi Mundo',
        text: 'Como vai?'
      },
      {
        title: 'Hello world',
        text: 'How are you?'
      },
      {
        title: 'Hola mundo',
        text: 'Como estás?'
      }
    ]

    return (
      <>
        {articles.map(({ title, text }) => (
          <Card key={title} title={title}>
            {text}
          </Card>
        ))}
      </>
    )
  }
}

export default App
