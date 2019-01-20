import React, { Component } from 'react'
import classNames from 'classnames'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Parallax, ParallaxLayer } from 'react-spring/addons'

// Styles
import './index.scss'

// Components
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    }

    this.editForm = this.editForm.bind(this)
  }

  editForm = ({ target: { name, value } }) => {
    this.setState({
      [name]: value || '',
    })
  }

  openedProfile = person => {
    let open = false

    if (!this.state[person]) {
      open = true
    } else if (this.state[person]) {
      open = !this.state[person]
    }

    this.setState({
      [person]: open,
    })
  }

  render() {
    const { firstName, lastName, phone, email, message } = this.state

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div>
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
                  onClick={() => this.parallax.scrollTo(4)}
                >
                  Support
                </AnchorLink>
                <AnchorLink
                  className="navbar-item"
                  href="#contact"
                  onClick={() => this.parallax.scrollTo(5)}
                >
                  Contact
                </AnchorLink>
              </div>
            </div>
          </nav>
          <Parallax ref={ref => (this.parallax = ref)} pages={4.6} horizontal>
            <ParallaxLayer offset={0} speed={0} factor={2}>
              <Image className="title-background" imgsrc="title_page.png" />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0} factor={20}>
              <div className="main-background" />
            </ParallaxLayer>

            <ParallaxLayer
              offset={0}
              speed={0.1}
              style={{
                display: 'block',
                width: '10%',
                marginLeft: '16%',
                marginTop: '-1%',
              }}
            >
              <Image imgsrc="branch1.png" className="branch1" />
            </ParallaxLayer>

            <ParallaxLayer
              offset={0}
              speed={0.1}
              style={{
                display: 'block',
                width: '10%',
                marginLeft: '-4%',
              }}
            >
              <Image imgsrc="branch2.png" className="branch2" />
            </ParallaxLayer>
            <ParallaxLayer
              offset={0}
              speed={0.1}
              style={{ display: 'block', width: '0.5%' }}
            >
              <Image imgsrc="leaf1.png" className="leaf1" />
            </ParallaxLayer>
            <ParallaxLayer
              offset={0}
              speed={0.1}
              style={{ display: 'block', width: '0.5%' }}
            >
              <Image imgsrc="leaf2.png" className="leaf2" />
            </ParallaxLayer>
            <ParallaxLayer
              offset={0}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              id="home"
              onClick={() => this.parallax.scrollTo(1)}
            >
              <div className="title-container">
                <div className="title-text-container">
                  <Image className="afi-thesis" imgsrc="AFI Thesis.png" />
                  <Image
                    className="the-speech-title"
                    imgsrc="THE SPEECH WHITE.png"
                  />
                  <Image className="chinese-title" imgsrc="Chinese Title.png" />
                </div>
                <button type="button" className="button is-black title-button">
                  <Image className="donate-title" imgsrc="DONATE NEW.png" />
                </button>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              id="story"
              onClick={() => this.parallax.scrollTo(2)}
            >
              <div className="container story-container">
                <h1 className="title">Story</h1>
                <p className="body">
                  The Speech is a coming of age story about discovering one’s
                  self via the gaze of others. Set in 2003 Beijing, right before
                  the SARS outbreak, we follow Zhenzhen, a third-grade student
                  who’s been chosen to give a speech in front of her whole
                  school finds herself lost in the arbitrary rules and
                  expectations from her parents, teachers and friends.
                </p>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={1.8}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              id="team"
            >
              <div className="container team-container">
                <h1 className="title">Team</h1>
                <div className="columns">
                  <div
                    className="column"
                    onClick={() => {
                      this.openedProfile('haohao')
                    }}
                  >
                    <Image
                      imgsrc="haohao.png"
                      className="team-img"
                      alt="haohao"
                      onClick={() => {
                        this.openedProfile('haohao')
                      }}
                    />
                  </div>
                  <div
                    className="column"
                    onClick={() => {
                      this.openedProfile('xiaoxiao')
                    }}
                  >
                    <Image
                      imgsrc="xiaoxiao.png"
                      className="team-img"
                      alt="xiaoxiao"
                      onClick={() => {
                        this.openedProfile('xiaoxiao')
                      }}
                    />
                  </div>
                  <div
                    className="column"
                    onClick={() => {
                      this.openedProfile('anton')
                    }}
                  >
                    <Image
                      imgsrc="anton.png"
                      className="team-img"
                      alt="anton"
                      onClick={() => {
                        this.openedProfile('anton')
                      }}
                    />
                  </div>
                </div>
                <div className="columns">
                  <div
                    className="column"
                    onClick={() => {
                      this.openedProfile('luqi')
                    }}
                  >
                    <Image
                      imgsrc="luqi.png"
                      className="team-img"
                      alt="luqi"
                      onClick={() => {
                        this.openedProfile('luqi')
                      }}
                    />
                  </div>
                  <div
                    className="column"
                    onClick={() => {
                      this.openedProfile('luqi')
                    }}
                  >
                    <Image
                      imgsrc="kiki.png"
                      className="team-img"
                      alt="kiki"
                      onClick={() => {
                        this.openedProfile('kiki')
                      }}
                    />
                  </div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={2.5}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              id="afi"
              onClick={() => this.parallax.scrollTo(4)}
            >
              <section id="afi" className="section afi-section">
                <div className="container afi-container">
                  <h1 className="title">AFI Conservatory</h1>
                  <p>
                    At the world-renowned AFI Conservatory, a dedicated group of
                    working professionals from the film and television
                    communities serve as mentors in a hands-on, production-based
                    environment nurturing the talents of tomorrow's
                    storytellers. The Conservatory is consistently recognized as
                    one of the world’s top film schools.
                  </p>
                  <p>
                    With an emphasis on narrative visual storytelling and
                    personal expression, each class breaks into teams that
                    mirror a real production environment. Those teams
                    collaborate on and produce more films than any other
                    graduate level film program.
                  </p>
                  <p>
                    Established in 1969, the two-year Master of Fine Arts
                    program provides training in six filmmaking disciplines:
                    Cinematography, Directing, Editing, Producing, Production
                    Design and Screenwriting. Admission to AFI Conservatory is
                    highly selective, with a maximum of only 140 graduates per
                    year.
                  </p>
                  <div>
                    <p>
                      AFI alumni continually celebrate critical recognition,
                      including wins at:
                    </p>
                    <ul className="bullets">
                      <li>
                        • Academy Awards (Wally Pfister, INCEPTION,
                        cinematography class of 1988),
                      </li>
                      <li>
                        • Emmy Awards (Dante Di Loreto, TEMPLE GRANDIN,
                        producing class of 1991),
                      </li>
                      <li>
                        • Tony Awards (Anne Garefino, "The Book of Mormon,"
                        producing class of 1988)
                      </li>
                      <li>
                        • The Grand Prizes at the Cannes Film Festival (Terrence
                        Malick, TREE OF LIFE, directing class of 1969)
                      </li>
                      <li>
                        • Sundance Film Festival (Drake Doremus, LIKE CRAZY,
                        directing class of 2005).
                      </li>
                    </ul>
                  </div>
                  <p>
                    Most recently, multiple AFI alumni received 2011 Emmy Award
                    nominations, including Patty Jenkins (THE KILLING, directing
                    class of 2000), Anne Garefino (SOUTH PARK, producing class
                    of 1988), Brad Falchuk (GLEE, screenwriting class of 1996),
                    Dante Di Loreto (GLEE, producing class of 1991), Bradley
                    Buecker (GLEE, directing class of 2003), Jeremy Podeswa
                    (BOARDWALK EMPIRE, directing class of 1984), Manny Cotto
                    (DEXTER, directing class of 1984) and Paul Starkman (TOP
                    CHEF, cinematography class of 1998).
                  </p>
                </div>
              </section>
            </ParallaxLayer>
            <ParallaxLayer
              offset={3.2}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              id="support"
              onClick={() => this.parallax.scrollTo(5)}
            >
              <div className="container donate-container">
                <h1 className="title">How to Make a Donation</h1>
                <a href="https://my.afi.com/dev/contribute2.aspx?don=244&fieldAmt=">
                  <button type="button" className="button donate-button">
                    <h2>Donate Here</h2>
                  </button>
                </a>
                <div className="columns">
                  <div className="column">
                    <div className="donate-section">
                      <b>Make sure “1927 - THE SPEECH " is selected.</b>
                      <br />
                      Fill out your information + donation amount.
                      <br />
                      Please note, all donations are in USD.
                      <br />
                      Funds will help pay for the following costs:
                      <ul type="disc">
                        <li>• Camera and Equipment Rental</li>
                        <li>• Location Fees</li>
                        <li>• Catering and Craft Services</li>
                        <li>• Transportation</li>
                        <li>• Production Design, Wardrobe, Hair and Make Up</li>
                        <li>• Visual Effects / Post Production</li>
                      </ul>
                      <br />
                      <p>We'll gladly accept any of following:</p>
                      <ul type="disc">
                        <li>
                          • Filming Locations (Houses, Venues, Offices,
                          Soundstages)
                        </li>
                        <li>• Equipment (Camera, Grip, Lighting)</li>
                        <li>• Art Department & Construction Supplies</li>
                        <li>• Costume</li>
                        <li>• Visual Effects</li>
                        <li>• Color Correction</li>
                        <li>• Sound Mixing</li>
                        <li>• Music Composing</li>
                        <li>• Craft Services/Catering</li>
                        <li>• Picture Vehicles</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column">
                    <div className="donate-section">
                      <b className="title">MATCHING GRANTS</b>
                      <br />
                      <br />
                      <p>
                        Many companies will match donations made by their
                        employees to non-profit charitable institutions. This
                        can DOUBLE your donation. Your Human Resources
                        Department will be able to inform you if your employer
                        offers this benefit. If so, please select the “My
                        company will match my gift” on the AFI Web Donation
                        Portal. Please contact us for additional help.
                      </p>
                      <br />
                      <b className="title">TAX DEDUCTIONS</b>
                      <br />
                      <br />
                      <p>
                        The American Film Institute is a Government recognized
                        501(c)(3) Non-Profit Organization, and holds tax exempt
                        status. Donations made toward “Moth” may be tax
                        deductible under Section 170 of the U.S. Tax Code. A
                        letter of acknowledgement from AFI will be sent for all
                        contributions.
                      </p>
                      <b className="title"> IN-KIND DONATIONS </b>
                      <br />
                      <br />
                      <p>
                        Help comes in many forms. We will gratefully accept any
                        in-kind donations to our film - and you will make the
                        credits! Please contact us and let us know how you can
                        help.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              offset={4.0}
              speed={0.1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              id="contact"
            >
              <div className="container contact-container">
                <h1 className="title">Contact Us</h1>
                <div className="body">
                  <div className="columns">
                    <div className=" column field data-field">
                      <label className="label">First Name</label>
                      <div className="control">
                        <input
                          className="input is-danger"
                          type="text"
                          placeholder="First Name"
                          onChange={this.editForm}
                          value={firstName}
                          name="firstName"
                        />
                      </div>
                    </div>
                    <div className=" column field data-field">
                      <label className="label">Last Name</label>
                      <div className="control">
                        <input
                          className="input is-danger"
                          type="text"
                          placeholder="Last Name"
                          onChange={this.editForm}
                          value={lastName}
                          name="lastName"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className=" column field data-field">
                      <label className="label">Email</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className="input is-danger"
                          type="email"
                          placeholder="Email"
                          onChange={this.editForm}
                          value={email}
                          name="email"
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope" />
                        </span>
                        <span className="icon is-small is-right">
                          <i className="fas fa-exclamation-triangle" />
                        </span>
                      </div>
                    </div>
                    <div className=" column field data-field">
                      <label className="label">Phone</label>
                      <div className="control">
                        <input
                          className="input is-danger"
                          type="number"
                          placeholder="Phone"
                          onChange={this.editForm}
                          value={phone}
                          name="phone"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="field data-field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Textarea"
                        onChange={this.editForm}
                        value={message}
                        name="message"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </Layout>
    )
  }
}
