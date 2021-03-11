// ////////////////////////////////////////////////////////////////////////////
import React, { Fragment, Component } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import apiUrl from '../apiConfig'
import axios from 'axios'

import { showArticle } from './../api/article-auth.js'

class ViewArticle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      article: null,
      deleted: false
    }
  }
  componentDidMount () {
    const { user, match, msgAlert } = this.props
    showArticle(match.params.id, user)
      .then(res => this.setState({ article: res.data.article }))
      .catch(error => {
        msgAlert({
          heading: 'Try Again',
          message: 'ERROR: ' + error.message,
          variant: 'danger'
        })
      })
  }
  deleteArticle = () => {
    // axios.delete(`${apiUrl}/books/${this.props.match.params.id}`)
    const { user, match, msgAlert } = this.props
    axios({
      url: `${apiUrl}/articles/${match.params.id}`,
      method: 'delete',
      headers: {
        // we need the user, so we have access to their token
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .then(msgAlert({
        heading: 'Success!',
        message: 'Your article has been deleted ',
        variant: 'primary'
      }))
    // .then(() => this.setState({ redirect: '/index-books' }))
      .catch(console.error)
  }
  render () {
    let articleJsx
    const { article, deleted } = this.state
    // if we're loading, request is still happening
    if (!article) {
      articleJsx = 'Loading...'
      return articleJsx
    }
    if (article) {
      articleJsx = (
        <Fragment>
          <h2>{article.title}</h2>
          <h4>Author: {article.authorName}</h4>
          <p>image url: {article.mainImageUrl}</p>
          <p>Content: {article.content}</p>
          <button onClick={this.deleteArticle}>Delete Article</button>
          <Button className='mr-2' variant="outline-info">
            <Link to={`/home/articles/${article.id}/update/`}>Update</Link>
          </Button>
        </Fragment>
      )
      // <button>
      //   <Link to={`/update-book/${book._id}`}>Update Article</Link>
      // </button>
    }
    return (
      <Fragment>
        {deleted ? <Redirect to="/home"/> : articleJsx}
      </Fragment>
    )
  }
}

export default withRouter(ViewArticle)
