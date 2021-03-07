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
    <button type="submit">Submit</button>
  </form>
)

export default ArticleForm
