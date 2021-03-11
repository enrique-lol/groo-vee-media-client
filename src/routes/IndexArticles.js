// 1. some imports
// destructure Component out of the react library
import React, { Component } from 'react'
// Import Link component from react-router-dom
// import { Link } from 'react-router-dom'

import { articleIndex } from '../api/article-auth.js'

// import React Bootstrap elements
import { Card } from 'react-bootstrap'

// 2. A class
class IndexArticles extends Component {
  // 1. set up the class
  constructor (props) {
    super(props)

    // state will make our constructor "useful"
    this.state = {
      // loading: false
      articles: null
    }
  }

  componentDidMount () {
    event.preventDefault()
    const { user } = this.props
    articleIndex(user)
      // .then(() => this.setState({ article: res.data.article }))
      .then(res => this.setState({ articles: res.data.articles }))
      .catch(console.error)
  }

  // 2. show some stuff in the DOM
  render () {
    let articlesJsx

    const { articles } = this.state
    // if we are loading (articles is null)
    // display a loading message
    if (articles === null) {
      articlesJsx = 'Loading...'
    } else if (articles.length === 0) {
      // return
      articlesJsx = 'You have 0 articles'
    } else {
      // if we have articles to display, display them
      // implicit return JSX (single line arrow function)
      const articleList = articles.map(article => (
        <Card className='article-card' key={article.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
              {article.authorName}
            </Card.Text>
          </Card.Body>
        </Card>
      ))
      // const articleList = articles.map(article => {
      //   const title = article.title
      //   const key = article._id
      //   // explicit return of JSX
      //   return <li key={key}>{title}</li>
      // })

      // <li key={article.id}>
      //  <Link to={`/home/articles/${article.id}`}>{article.title}</Link>
      // </li>
      // const articleCardArray = []
      // const newList = function () {
      //   articleList.forEach((item, i) => {
      //     console.log(item)
      //   })
      // }

      articlesJsx = (
        <ul>
          {articleList}
        </ul>
      )
    }

    return (
      <React.Fragment>
        <h1>Featured Articles</h1>
        <section className='article-container'>
          {articlesJsx}
        </section>
      </React.Fragment>
    )
  }
}

// 3. some exports
export default IndexArticles
