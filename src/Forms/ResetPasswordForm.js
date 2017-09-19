
/* React */
import React from 'react'
import { connect } from 'react-redux'

/* Actions */
import Actions from '../Actions/Creators'

import { getParameterByName } from '../Helpers/Util'

/* Selectors */
//import { getMe } from '../Selectors/UserSelector'

/* Components */
import Form from 'react-jsonschema-form'
import { Button } from 'react-foundation'
//import { Link } from 'react-router'

class ResetPasswordForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        schema: {
          //title: "Reset Password",
          type: "object",
          required: ["password","password2"],
          properties: {
            password: {title: "Password", type: "string", minLength: 3 },
            password2: {title: "Repeat Password", type: "string", minLength: 3 }
          }
        },
        uiSchema: {
        },
        formData: {
        },
        buttons: [
          { "type": "Submit", "title": "Submit" }
        ]
      }
    }
  }

  onSubmit = ({formData}) => {
    let email = getParameterByName('email');
    let token = getParameterByName('token');
    if (!email || !token) return false;

    this.props.dispatch(Actions.resetPasswordAttempt({
      email: email,
      token: token,
      password: formData.password
    }))
  }

  onChange = ({formData}) => {

  }

  onError = ({formData}) => {

  }

  render() {

    let z = this;

    let email = getParameterByName('email');
    let token = getParameterByName('token');
    if (!email || !token) return false;

    return (
      <Form
        schema={z.state.form.schema}
        uiSchema={z.state.form.uiSchema}
        formData={z.state.form.formData}
        onChange={z.onChange}
        onSubmit={z.onSubmit}
        onError={z.onError} >
        <div className="form-buttons">{z.state.form.buttons.map((item,id) => {
          return (<Button key={id} type={item.type}>{ item.title }</Button>)
        })}</div>
      </Form>
    );
  }

}

const mapStateToProps = (state, props) => {
  return {
  }
}

export default connect(mapStateToProps)(ResetPasswordForm)



