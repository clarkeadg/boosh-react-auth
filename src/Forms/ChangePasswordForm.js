
/* React */
import React from 'react'
import { connect } from 'react-redux'

import AuthActions from '../Actions/Creators'
import { getMe } from '../Selectors/AuthSelector'

/* Components */
import Form from 'react-jsonschema-form'
import { Button } from 'react-foundation'
import { Loading } from 'boosh-react-components'
import { Link } from 'react-router'

class ChangePasswordForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        schema: {
          //title: "Account",
          type: "object",
          required: ["password","password1","password2"],          
          properties: {
            password: {title: "Old password", type: "string", minLength: 3 },
            password1: {title: "New password", type: "string", minLength: 3 },
            password2: {title: "Confirm new password", type: "string", minLength: 3 }
          }
        },
        uiSchema: {
          classNames: "ChangePasswordForm",
          password: {
            "ui:widget": "password",
            "ui:placeholder": "Old password",
            "ui:options": { label: false }
          },
          password1: {
            "ui:widget": "password",
            "ui:placeholder": "New password",
            "ui:options": { label: false }
          },
          password2: {
            "ui:widget": "password",
            "ui:placeholder": "Confirm new password",
            "ui:options": { label: false }
          }
        },
        formData: {
        },
        buttons: [
          { "type": "Submit", "title": "Update password" }
        ]
      }
    }
  }

  onSubmit = ({formData}) => {
    console.log('SUBMIT',formData, this.props.me)
    this.props.dispatch(AuthActions.updatePasswordAttempt({
      email: this.props.me.email,
      password: formData.password,
      new_password: formData.password1
    }))
  }

  onChange = ({formData}) => {

  }

  onError = ({formData}) => {

  }

  renderForm(loading, form) {
    if (loading) {
      return (
        <Loading/>
      )
    }
    return (
      <Form
        schema={form.schema}
        uiSchema={form.uiSchema}
        formData={form.formData}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        onError={this.onError} >
        <div className="form-buttons">
          {form.buttons.map((item,id) => {
            return (<Button key={id} type={item.type}>{ item.title }</Button>)
          })}
        </div>
      </Form>
    )
  }

  render() {

    let { form } = this.state;
    let { loading } = this.props;

    // { this.props.me.errorCode ? 'There was an error logging in.' : ''}

    return (
      <div>
        { this.renderForm(loading, form) }
      </div>
    );
  }

}

ChangePasswordForm.propTypes = {
  loading: React.PropTypes.bool,
  me: React.PropTypes.object
}

ChangePasswordForm.defaultProps = {
  loading: false,
  me: {}
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.me.attempting,
    me: getMe(state, props)
  }
}
export default connect(mapStateToProps)(ChangePasswordForm)



