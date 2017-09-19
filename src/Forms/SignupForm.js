
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
import { Link } from 'react-router'

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        schema: {
          title: "",
          type: "object",
          required: ["email","username","password","tos"],
          properties: {
            email: {type: "string", title: "email"},
            username: {type: "string", title: "username"},
            password: {type: "string", title: "password", "minLength": 5 },
            tos: {type: "boolean"}
          }
        },
        uiSchema: {
          email: {
            "ui:widget": "email",
            "ui:placeholder": "Email Address",
            "ui:options": { label: false }
          },
          username: {
            "ui:placeholder": "Username",
            "ui:options": { label: false }
          },
          password: {
            "ui:widget": "password",
            "ui:placeholder": "Choose a Password",
            "ui:options": { label: false }
          },
          tos: {
            "ui:options": { label: false },
            "ui:widget": (props) => {
            return (
              <div className="custom-checkbox">
                <input type="checkbox"
                  value={false}
                  required={props.required}
                  onChange={(event) => props.onChange(event.target.value ? true : false)} />
                <div className="checkbox-label">
                  {"I have read, understand, and agree to the "}
                  <Link to="/pages/terms">Terms of Service</Link>
                </div>
              </div>
            )}
          }
        },
        formData: {
          email: '',
          username: '',
          password: ''
        },
        buttons: [
          { "type": "Submit", "title": "Join" }
        ]
      }
    }
  }

  onSubmit = ({formData}) => {
    console.log(formData)
    this.props.dispatch(Actions.signupAttempt({
      email: formData.email,
      username: formData.username,
      password: formData.password
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
        autocomplete="false"
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

export default connect(mapStateToProps)(SignupForm)



