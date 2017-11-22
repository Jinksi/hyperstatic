import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import ScrollToTop from './components/ScrollToTop'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import NoMatch from './views/NoMatch'
import Nav from './components/Nav'
import NavLink from './components/NavLink'
import Logo from './components/Logo'
import GithubCorner from './components/GithubCorner'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import globalStyles from './globalStyles'

export const siteTitle = 'HyperStatic'
const siteDescription = 'A not-so-static site boilerplate.'
const siteUrl = 'https://hyperstatic.netlify.com'
const routes = [
  {
    title: 'Home',
    path: '/',
    comp: Home,
    exact: true
  },
  {
    title: 'About',
    path: '/about/',
    comp: About,
    exact: true
  },
  {
    title: 'Contact',
    path: '/contact/',
    comp: Contact,
    exact: true
  }
]

class App extends Component {
  componentWillMount () {
    globalStyles()
  }

  render () {
    return (
      <Router>
        <div>
          <ScrollToTop />
          <ServiceWorkerNotifications reloadOnUpdate />
          <GithubCorner url='https://github.com/Jinksi/hyperstatic' />
          <Helmet titleTemplate={`${siteTitle} | %s`}>
            <meta property='og:title' content={siteTitle} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={siteUrl} />
            <meta property='og:image' content='/card-og.png' />
            <meta property='og:description' content={siteDescription} />
          </Helmet>
          <Nav>
            <Logo>
              <span role='img' aria-label='Watermelon'>
                🍉
              </span>
            </Logo>
            {routes.map((route, i) => <NavLink key={i} {...route} />)}
          </Nav>
          <Switch>
            {routes.map((route, i) => (
              <Route
                {...route}
                key={i}
                render={() => <route.comp {...route} />}
              />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
