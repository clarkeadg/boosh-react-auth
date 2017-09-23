
import { browserHistory } from 'react-router'

const redirect = (url) => {
  browserHistory.push(url || getParameterByName('redirect') || '/')
}

const getAccessToken = () => {
  let accessToken = '';
  if(typeof window != "undefined") {
    accessToken = window.localStorage.getItem('accessToken') || null;
  }
  return accessToken  
}

const getParameterByName = (name) => {
  if (typeof window != "undefined") {
    let match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  } else {
    return null;
  }
}

export { redirect, getAccessToken, getParameterByName };

