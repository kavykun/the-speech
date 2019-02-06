import React, { PureComponent } from 'react'
import { ParallaxLayer } from 'react-spring/addons'
import Waypoint from 'react-waypoint'
import { Transition } from 'react-spring'

export default class Donate extends PureComponent {
  state = {
    show: false,
  }

  // _handleWaypointEnter = () => {
  //   this.setState({
  //     show: true,
  //   })
  // }

  // _handleWaypointLeave = () => {
  //   this.setState({
  //     show: false,
  //   })
  // }

  render() {
    const { props } = this.props
    const { show } = this.state

    return (
      <ParallaxLayer
        offset={4.3}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="support"
        onClick={() => props.parallax.scrollTo(5)}
      >
        <div className="donate-content">
          <div className="donate-title-section">
            <h1 className="title">How to Make a Donation</h1>
            <a
              href="https://my.afi.com/dev/contribute2.aspx?don=244&fieldAmt="
              target="_blank"
            >
              <button type="button" className="button donate-button">
                <h2>Donate Here</h2>
              </button>
            </a>
          </div>

          <div className="container donate-container">
            <div className="columns">
              <div className="column">
                <div className="donate-section donate-section-1">
                  <b>Make sure “1927 - THE SPEECH " is selected.</b>
                  <br />
                  <br />
                  Fill out your information + donation amount. Please note, all
                  donations are in USD. Funds will help pay for the following
                  costs:
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
                      • Filming Locations (Houses, Venues, Offices, Soundstages)
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
                <div className="donate-section donate-section-2">
                  <p className="title">MATCHING GRANTS</p>
                  <br />
                  <br />
                  <p>
                    Many companies will match donations made by their employees
                    to non-profit charitable institutions. This can DOUBLE your
                    donation. Your Human Resources Department will be able to
                    inform you if your employer offers this benefit. If so,
                    please select the “My company will match my gift” on the AFI
                    Web Donation Portal. Please contact us for additional help.
                  </p>
                  <br />
                  <b className="title">TAX DEDUCTIONS</b>
                  <br />
                  <br />
                  <p>
                    The American Film Institute is a Government recognized
                    501(c)(3) Non-Profit Organization, and holds tax exempt
                    status. Donations made toward “Moth” may be tax deductible
                    under Section 170 of the U.S. Tax Code. A letter of
                    acknowledgement from AFI will be sent for all contributions.
                  </p>
                  <b className="title"> IN-KIND DONATIONS </b>
                  <br />
                  <br />
                  <p>
                    Help comes in many forms. We will gratefully accept any
                    in-kind donations to our film - and you will make the
                    credits! Please contact us and let us know how you can help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    )
  }
}
