// ////////////////////////////////////////////////////////////////////////////
import React, { Fragment, Component } from 'react'
import Card from 'react-bootstrap/Card'
// import { withRouter } from 'react-router-dom'

class FutureFeature extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }
  componentDidMount () {
  }

  render () {
    return (
      <Fragment>
        <Card body>This feature is under development. Please visit at a later time. Thank You!</Card>
      </Fragment>
    )
  }
}

export default FutureFeature
