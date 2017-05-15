export default [{
    path: '/',
    name: 'json',
    component: require('components/Json')
  },
  {
    path: '/urlencode',
    name: 'urlencode',
    component: require('components/UrlEncode')
  },
  {
    path: '*',
    redirect: '/'
  }
]