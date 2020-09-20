import { path } from 'ramda'
import StoreRedux from 'Redux/'

export function getRedirectLoginUrl (data) {
  return '/user/home'
}

export function getRequestError (err) {
  if (path(['response', 'status'], err) === 400) {
    const data = path(['response', 'data', 'errors', 0], err)
    const keys = Object.keys(data)
    return data[keys[0]]
  }

  return 'Server error.'
}

export const cpfMask = value => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export function truncate (str = '', n = 20) {
  if (typeof str === 'string') {
    if ((str || '').length > n) {
      return str.slice(0, n) + '...'
    }

    return str
  } else if (str !== null) {
    if (str.content) {
      return truncate(str.content, n)
    } else {
      return ''
    }
  }
}

export function getUserLogged (history) {
  const { auth } = StoreRedux.getState()

  if (auth.token) {
    history.push('/user/home')
  }
}
