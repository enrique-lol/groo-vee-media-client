import React from 'react'

const ArticleForm = ({ article, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <input
      required
      name="title"
      type="text"
      placeholder="Headline"
      value={article.title}
      onChange={handleChange}
    />
    <input
      required
      name="content"
      type="text"
      placeholder="Content"
      value={article.content}
      onChange={handleChange}
    />
    <input
      required
      name="authorName"
      type="text"
      placeholder="author"
      value={article.authorName}
      onChange={handleChange}
    />
    <input
      required
      name="mainImageUrl"
      type="text"
      placeholder="1 image url"
      value={article.mainImageUrl}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default ArticleForm
