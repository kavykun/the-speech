import React, { Fragment } from 'react'
import { BrowserView, isMobile } from 'react-device-detect'
import { ParallaxLayer } from 'react-spring/addons'

import Image from '../components/image'

export default function ParallaxSection() {
  return (
    <Fragment>
      <BrowserView>
        <ParallaxLayer offset={0} speed={0} factor={2}>
          <Image className="title-background" imgsrc="title_page.png" />
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0 : 1} speed={0} factor={5}>
          <div className="black-background" />
        </ParallaxLayer>

        <ParallaxLayer offset={isMobile ? 0 : 1} speed={0} factor={5}>
          <div className="main-background" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'block',
            width: '10%',
            marginLeft: '13%',
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
            marginLeft: '-5%',
          }}
        >
          <Image imgsrc="branch2.png" className="branch2" />
        </ParallaxLayer>
      </BrowserView>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{ display: 'block', width: '0.5%' }}
      >
        <Image imgsrc="leaf1.png" className="leaf1" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{ display: 'block', width: '0.5%' }}
      >
        <Image imgsrc="leaf2.png" className="leaf2" />
      </ParallaxLayer>
    </Fragment>
  )
}
