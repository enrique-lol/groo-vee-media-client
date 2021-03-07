// 1. some imports
// destructure Component out of the react library
import React, { Component } from 'react'
// Import Link component from react-router-dom
import { Link } from 'react-router-dom'

import { articleIndex } from '../api/article-auth.js'

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
        <li key={article.id}>
          <Link to={`/home/articles/${article.id}`}>{article.title}</Link>
        </li>
      ))
      // const articleList = articles.map(article => {
      //   const title = article.title
      //   const key = article._id
      //   // explicit return of JSX
      //   return <li key={key}>{title}</li>
      // })

      articlesJsx = (
        <ul>
          {articleList}
        </ul>
      )
      // BAD: don't do this, this creates a JS object rather than
      // referenceing a variable inside of JSX
      // articlesJsx = {articleList}
    }

    return (
      <React.Fragment>
        <h1>My Articles</h1>
        {articlesJsx}
      </React.Fragment>
    )
  }
}

// 3. some exports
export default IndexArticles
