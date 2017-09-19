
/* React */
import React from 'react'
import { connect } from 'react-redux'

/* Actions */
import Actions from '../Actions/Creators'

/* Selectors */
//import { getMe } from '../Selectors/UserSelector'

/* Components */
import Form from 'react-jsonschema-form'
import { Button } from 'react-foundation'
//import { Link } from 'react-router'

class ForgotPasswordForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        schema: {
          //title: "Forgot Password",
          type: "object",
          required: ["email"],
          properties: {
            email: {title: "Email", type: "string" }
          }
        },
        uiSchema: {
          email: {
            "ui:widget": "email",
            "ui:placeholder": "Email Address",
            "ui:options": { label: false }
          }
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
    this.props.dispatch(Actions.forgotPasswordAttempt({
      email: formData.email
    }))
  }

  onChange = ({formData}) => {

  }

  onError = ({formData}) => {

  }

  render() {

    let z = this;

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

export default connect(mapStateToProps)(ForgotPasswordForm)



