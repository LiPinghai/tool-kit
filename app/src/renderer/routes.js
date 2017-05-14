export default [{
    path: '/',
    name: 'json',
    component: require('components/Json')
  },
  {
    path: '*',
    redirect: '/'
  }
]