import React, { PureComponent } from 'react'
import { ParallaxLayer } from 'react-spring/addons'
import { debounce } from 'lodash'

import Waypoint from 'react-waypoint'

export default class Story extends PureComponent {
  render() {
    const { props } = this.props
    return (
      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="story"
        onClick={() => props.parallax.scrollTo(1.68)}
      >
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
          horizontal={true}
        >
          <div className="container story-container">
            <h1 className="title">Story</h1>
            <p className="body">
              The Speech is a coming of age story about discovering one’s self
              via the gaze of others. Set in 2003 Beijing, right before the SARS
              outbreak, we follow Zhenzhen, a third-grade student who’s been
              chosen to give a speech in front of her whole school finds herself
              lost in the arbitrary rules and expectations from her parents,
              teachers and friends.
            </p>
          </div>
        </Waypoint>
      </ParallaxLayer>
    )
  }
}
