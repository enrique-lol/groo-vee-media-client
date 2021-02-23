// Initial Imports
import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import { Link } from 'react-router-dom'

// Define each individual article
const articlesArray = [
  { articleId: 'first-article-ever',
    title: 'First Article Ever!',
    headline: 'Is this the first headline? Yes.',
    text: 'lorem impsum ONE lorem impsum ONE lorem impsum ONE lorem impsum ONE lorem impsum ONE lorem impsum ONE lorem impsum ONE',
    mainPictureSrc: 'https://i.imgur.com/6uZsvkv.jpg' },

  { articleId: 'worlds-second-article',
    title: 'Worlds Second Article!',
    headline: 'The return of Lorem Ipsum',
    text: 'lorem impsum TWO lorem impsum TWO lorem impsum TWO lorem impsum TWO lorem impsum TWO lorem impsum TWO lorem impsum TWO',
    mainPictureSrc: 'https://i.imgur.com/6uZsvkv.jpg' },

  { articleId: 'third-article-in-history',
    title: 'Third Article In History!',
    headline: 'Lorem Ipsum strikes back',
    text: 'lorem impsum THREE lorem impsum THREE lorem impsum THREE lorem impsum THREE lorem impsum THREE lorem impsum THREE lorem impsum THREE',
    mainPictureSrc: 'https://i.imgur.com/6uZsvkv.jpg' },

  { articleId: 'article-number-four',
    title: 'Article Number Four!',
    headline: 'Lorem Ipsum strikes back',
    text: 'lorem impsum FOUR lorem impsum FOUR lorem impsum FOUR lorem impsum FOUR lorem impsum FOUR lorem impsum FOUR lorem impsum FOUR',
    mainPictureSrc: 'https://i.imgur.com/6uZsvkv.jpg' }
]

const articleContainer = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexFlow: 'row wrap'
}

const AllArticles = () => {
  const article = articlesArray.map(article => {
    return (
      <CardDeck style={{ width: '40%' }} key={articlesArray.articleId}>
        <Card key={article.articleId} style={{ display: 'flex', justifyContent: 'center', margin: '5%' }}>
          <Link to={`/${article.articleId}`}>
            <Card.Body>
              <Card.Img style={{ width: '75%', height: '75%', margin: 'auto' }} variant="top" src={article.mainPictureSrc} />
            </Card.Body>
            <Card.Footer>
              <Card.Title>{article.title}</Card.Title>
            </Card.Footer>
          </Link>
        </Card>
      </CardDeck>
    )
  })
  return (
    <div style={articleContainer}>
      {article}
    </div>
  )
}

export default AllArticles
