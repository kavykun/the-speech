import React, { Fragment } from 'react'

// Components
import Image from '../components/image'

export default function(props) {
  const { imgsrc, description } = props

  return (
    <Fragment>
      <p className="team-description-text">{description}</p>
      <Image className="team-description-bg" imgsrc={imgsrc} />
    </Fragment>
  )
}
