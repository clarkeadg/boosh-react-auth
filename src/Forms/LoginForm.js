
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
import { Loading } from 'boosh-react-components'
import { Link } from 'react-router'

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        schema: {
          title: "",
          type: "object",
          required: ["username","password"],
          properties: {
            username: {type: "string", title: "username"},
            password: {type: "string", title: "password"}
          }
        },
        uiSchema: {
          username: {
            "ui:placeholder": "Username",
            "ui:options": { label: false }
          },
          password: {
            "ui:widget": "password",
            "ui:placeholder": "Password",
            "ui:options": { label: false }
          }
        },
        formData: {
        },
        buttons: [
          { "type": "Submit", "title": "Login" }
        ]
      }
    }
  }

  onSubmit = ({formData}) => {
    this.state.form.formData.username = formData.username;
    this.props.dispatch(Actions.loginAttempt({
      username: formData.username,
      password: formData.password
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

    return (
      <div>
        { this.props.me.errorCode ? 'There was an error logging in.' : ''}
        { this.renderForm(loading, form) }
      </div>
    );
  }

}

LoginForm.propTypes = {
  loading: React.PropTypes.bool,
  me: React.PropTypes.object
}

LoginForm.defaultProps = {
  loading: false,
  me: {}
}

const mapStateToProps = (state, props) => {
  return {
    loading: state.me.attempting
    //me: getMe(state, props)
  }
}
export default connect(mapStateToProps)(LoginForm)



