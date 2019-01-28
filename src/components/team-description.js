import React, { Fragment } from 'react'
import { Transition } from 'react-spring'

// Components
import Image from '../components/image'

export default function(props) {
  const { imgsrc, description, show, className } = props

  return (
    <Fragment>
      <Transition
        items={show}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
            <div style={props}>
              <p className="team-description-text">{description}</p>
              <Image
                imgsrc={imgsrc}
                className={`team-description-bg ${className}-team-bg`}
              />
            </div>
          ))
        }
      </Transition>
    </Fragment>
  )
}
