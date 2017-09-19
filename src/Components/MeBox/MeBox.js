
/* React */
import React from 'react'
import { connect } from 'react-redux';

/* Actions */
import Actions from './../../Actions/Creators'

/* Selectors */
import { getMe } from './../../Selectors/AuthSelector'
//import { getVisibleMessages } from 'boosh-react-messages'
//import { getVisibleNotifications } from 'boosh-react-notifications'

/* Components */
import { Menu, MenuItem, Button, Badge, Icon, Colors, Sizes } from 'react-foundation'
import { Link } from 'react-router'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

class MeBox extends React.Component {

  renderLoggedOut() {
    return (
      <Menu className="right me-box loggedout">
        <MenuItem><Link to='/login' className="btn-login"><Button size={Sizes.SMALL}>Login</Button></Link></MenuItem>
        <MenuItem><Link to='/signup' className="btn-signup"><Button size={Sizes.SMALL} color={Colors.SECONDARY}>Signup</Button></Link></MenuItem>
      </Menu>
    )
  }

  renderBadge(data) {
    if (data.length) {
      return (
        <Badge color={Colors.ALERT}>{ data.length }</Badge>
      )
    }
    return false;
  }

  renderLoggedIn() {

    const { me, messages, notifications } = this.props

    return (
      <Menu className="right me-box loggedin">
        <MenuItem>
          <Link className="IconBox" to='/notifications'>
            <Icon name="fi-comment"/>
            { this.renderBadge(notifications) }
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="IconBox" to='/messages/inbox'>
            <Icon name="fi-mail"/>
            { this.renderBadge(messages) }
          </Link>
        </MenuItem>
        <MenuItem>
          <Dropdown ref="dropdown">
            <DropdownTrigger>
              <img className="UserPhoto UserPhotoSmall" src={me.photo} />
              <span className="username">{me.username}</span>
            </DropdownTrigger>
            <DropdownContent onClick={()=>{this.refs.dropdown.hide()}}>
              <Menu isVertical>
                <MenuItem><Link to={'/'+me.username+'/activity'}>Profile</Link></MenuItem>
                <MenuItem><Link to='/settings/profile'>Settings</Link></MenuItem>
                <MenuItem><a href='#' onClick={() => this.props.dispatch(Actions.logout({ token: me.token }))}>Logout</a></MenuItem>
              </Menu>
            </DropdownContent>
          </Dropdown>
        </MenuItem>
      </Menu>
    )
  }

  render() {

    let { me, loading } = this.props

    return (
      <div className="me-box">
        { me.username ? this.renderLoggedIn() : this.renderLoggedOut() }
      </div>
    );
  }

}

MeBox.propTypes = {
  me: React.PropTypes.object,
  messages: React.PropTypes.array,
  notifications: React.PropTypes.array
}

MeBox.defaultProps = {
  me: {},
  messages: [],
  notifications: []
}

const mapStateToProps = (state, props) => {
  return {
    me: getMe(state, props)
    //messages: getVisibleMessages(state, props),
    //notifications: getVisibleNotifications(state, props)
  }
}

export default connect(mapStateToProps)(MeBox)

