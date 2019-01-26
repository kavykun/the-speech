import React, { PureComponent } from 'react'
import { ParallaxLayer } from 'react-spring/addons'
import { isMobile } from 'react-device-detect'

// Components
import Image from '../components/image'

export default class Team extends PureComponent {
  render() {
    const { props } = this.props

    console.log(isMobile)

    return (
      <ParallaxLayer
        offset={isMobile ? 2.7 : 2}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="team"
        onClick={() => props.parallax.scrollTo(3)}
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
    )
  }
}
