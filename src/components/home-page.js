import React, { PureComponent } from 'react'
import { ParallaxLayer } from 'react-spring/addons'

// Components
import Image from '../components/image'

export default class Homepage extends PureComponent {
  render() {
    const { props } = this.props

    return (
      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="home"
        onClick={() => props.parallax.scrollTo(1.2)}
      >
        <div className="title-text-container">
          <Image className="afi-thesis" imgsrc="afi-thesis.png" />
          <Image className="the-speech-title" imgsrc="the-speech-white.png" />
          <Image className="chinese-title" imgsrc="chinese-title.png" />
        </div>
        <a
          href="https://my.afi.com/dev/contribute2.aspx?don=244&fieldAmt="
          target="_blank"
          className="title-link"
        >
          <button type="button" className="button is-black title-button">
            <Image className="donate-title" imgsrc="donate-new.png" />
          </button>
        </a>
      </ParallaxLayer>
    )
  }
}
