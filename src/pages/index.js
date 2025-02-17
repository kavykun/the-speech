import React, { PureComponent, Fragment } from 'react'
import classNames from 'classnames'
import { isMobile } from 'react-device-detect'

// Styles
import './index.scss'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Parallax } from 'react-spring/addons'

// Pages
import ParallaxSection from '../components/parallax-section'
import Homepage from '../components/home-page'
import Story from '../components/story'
import Team from '../components/team'
import AFI from '../components/afi'
import Donate from '../components/donate'
import Contact from '../components/contact'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight)

let pages = 6
let donateOffset = 3.05

class IndexPage extends PureComponent {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Fragment>
          <nav
            className={classNames('navbar is-fixed-top is-transparent')}
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                href="#"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <AnchorLink
                  className="navbar-item"
                  href="#home"
                  onClick={() => this.parallax.scrollTo(0)}
                >
                  Home
                </AnchorLink>
                <AnchorLink
                  className="navbar-item"
                  href="#story"
                  onClick={() => this.parallax.scrollTo(1)}
                >
                  Story
                </AnchorLink>
                <AnchorLink
                  className="navbar-item"
                  href="#team"
                  onClick={() => this.parallax.scrollTo(2)}
                >
                  Team
                </AnchorLink>
                <AnchorLink
                  className="navbar-item"
                  href="#afi"
                  onClick={() => this.parallax.scrollTo(3)}
                >
                  AFI
                </AnchorLink>
                <AnchorLink
                  className="navbar-item"
                  href="#support"
                  onClick={() => this.parallax.scrollTo(4.08)}
                >
                  Support
                </AnchorLink>
                <AnchorLink
                  className="navbar-item"
                  href="#scroll"
                  onClick={() => this.parallax.scrollTo(6)}
                >
                  Contact
                </AnchorLink>
              </div>
            </div>
          </nav>

          <Parallax
            ref={ref => (this.parallax = ref)}
            pages={pages}
            horizontal={!isMobile}
            className="parallax-layer-container"
          >
            <ParallaxSection />
            <a className="navigate-arrow-container-home">
              <FontAwesomeIcon
                className="navigate-arrow"
                icon={['fas', 'arrow-right']}
              />
            </a>

            <Homepage props={this} />
            <Story props={this} />
            <Team props={this} />
            <AFI props={this} />
            <Donate props={this} />
            <Contact props={this} />
          </Parallax>
        </Fragment>
      </Layout>
    )
  }
}

export default IndexPage
