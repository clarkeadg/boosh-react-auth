
/* React */
import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

/* Components */
import { Row, Column } from 'react-foundation'
import { Portlet } from 'boosh-react-components'

import { getMe } from '../Selectors/AuthSelector'

import { redirect } from '../Helpers/Util';

/* Forms */
import ResetPasswordForm from '../Forms/ResetPasswordForm'

class ResetPassword extends React.Component {

  componentWillReceiveProps (newProps) {
    if (newProps.me.username) {
      redirect()
    }
  }

  render() {

    let title = "Reset Password";
    let html = "";

    let z = this;

    return (
      <div className="page">
        <Row className="display">
          <Column small={12} medium={6} large={5} centerOnSmall>
            <Portlet title={title} items={<ResetPasswordForm/>} />
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

export default connect(mapStateToProps)(ResetPassword)



