
/* React */
import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Helmet from 'react-helmet'

/* Selectors */
import { getMe } from '../Selectors/AuthSelector'

/* Utils */
import { redirect } from '../Helpers/Util';

/* Components */
import { Row, Column } from 'react-foundation'
import { Portlet } from 'boosh-react-components'

/* Forms */
import LoginForm from '../Forms/LoginForm'

class Login extends React.Component {

  componentWillReceiveProps (newProps) {
    if (newProps.me.username) {
      redirect()
    }
  }

  render() {

    let title = "Login";

    return (
      <div className="page">
        <Row className="display">
          <Column small={12} medium={6} large={5} centerOnSmall>
            <Portlet title={title} items={<LoginForm/>} />
          </Column>
        </Row>
      </div>
    );
  }

}

const mapStateToProps = (state, props) => {
  return {
    me: getMe(state, props)
  }
}
export default connect(mapStateToProps)(Login)



