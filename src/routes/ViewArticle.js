// imports
import React, { Component, Fragment } from 'react'
// import articlesArray from './../src/components/AllArticles/AllArticles.js'

// class component
class ViewArticle extends Component {
  constructor () {
    super()

    this.state = {
      articleId: ''
    }
  }

  componentDidMount () {
    const findById = `${this.props.match.params.articleId}`
    console.log(findById)
    // articlesArray.filter(articleId = findById)
  }

  render () {
    let articleJsx
    return (
      <Fragment>
        <h2>Article!</h2>
        {articleJsx}
      </Fragment>
    )
  }
}

export default ViewArticle
