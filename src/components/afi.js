import React, { PureComponent } from 'react'
import { ParallaxLayer } from 'react-spring/addons'

export default class AFI extends PureComponent {
  render() {
    const { props } = this.props

    return (
      <ParallaxLayer
        offset={3}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="afi"
        onClick={() => props.parallax.scrollTo(4)}
      >
        <section id="afi" className="section afi-section">
          <div className="container afi-container">
            <h1 className="title">AFI Conservatory</h1>
            <p>
              At the world-renowned AFI Conservatory, a dedicated group of
              working professionals from the film and television communities
              serve as mentors in a hands-on, production-based environment
              nurturing the talents of tomorrow's storytellers. The Conservatory
              is consistently recognized as one of the world’s top film schools.
            </p>
            <p>
              With an emphasis on narrative visual storytelling and personal
              expression, each class breaks into teams that mirror a real
              production environment. Those teams collaborate on and produce
              more films than any other graduate level film program.
            </p>
            <p>
              Established in 1969, the two-year Master of Fine Arts program
              provides training in six filmmaking disciplines: Cinematography,
              Directing, Editing, Producing, Production Design and
              Screenwriting. Admission to AFI Conservatory is highly selective,
              with a maximum of only 140 graduates per year.
            </p>
            <div>
              <p>
                AFI alumni continually celebrate critical recognition, including
                wins at:
              </p>
              <ul className="bullets">
                <li>
                  • Academy Awards (Wally Pfister, INCEPTION, cinematography
                  class of 1988),
                </li>
                <li>
                  • Emmy Awards (Dante Di Loreto, TEMPLE GRANDIN, producing
                  class of 1991),
                </li>
                <li>
                  • Tony Awards (Anne Garefino, "The Book of Mormon," producing
                  class of 1988)
                </li>
                <li>
                  • The Grand Prizes at the Cannes Film Festival (Terrence
                  Malick, TREE OF LIFE, directing class of 1969)
                </li>
                <li>
                  • Sundance Film Festival (Drake Doremus, LIKE CRAZY, directing
                  class of 2005).
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ParallaxLayer>
    )
  }
}
