import React, { PureComponent } from 'react'
import { ParallaxLayer } from 'react-spring/addons'
import { isMobile } from 'react-device-detect'

// Components
import Image from '../components/image'
import TeamDesc from '../components/team-description'

const haohaoDesc =
  'Haohao is a writer-director based in LA. Born and grew up in Beijing, China, she came to the U.S to pursue her B.A. in Film and Television Production at UCLA School of Theater Film and Television.  After graduation, she stayed in LA and worked as a freelancer with a focus on Chinese-American coproduction film and commercials. Before attending AFI as a directing fellow, she served as the assistant to the director in the Lionsgate and Hunan TV Chinese-American co-production film, COME ACROSS LOVE. '
const xiaoxiaoDesc =
  'Xiaoxiao Li is an award-winning producer, director. Enrolled in M.F.A. in Producing at the American Film Institute.Specialized in U.S. China co-production, film distribution and marketing. Working with Huaxia Film Distribution, Vogue, New York Documentary Festival, MassMutual Financial Group, etc., earning her Filmmaking MFA degree at 2016, also was invited by Featured Candidate of International Youth Leadership Summit as the filmmaker representative. Her film “SUPERCAR MAN" won more than 20 categories in International Film Festivals and has been highly acclaimed by critics and film festivals alike while garnering distribution worldwide.'
const antonDesc =
  'Anton is an American cinematographer who is receiving his masters degree from the AFI. He has worked in Europe, Asia and the Americas and his films have played at festivals such as Sundance and Palm Springs. He has a degree in political science.'
const luqiDesc =
  'Luqi Zhao is from Kunming, a city in Southwest China. She graduated from University of North Carolina Wilmington (UNCW) with a major in Film Studies, a minor in Digital Arts and a minor in Asian Studies. During undergrad, she developed a strong interest in editing which led her to pursue her dream to become a film editor. She then moved to Los Angeles and worked in post-production along with graphic design at Market Street Productions in Venice, California for a year. In 2017, Luqi got accepted to American Film Institute Conservatory (AFI) and started the Editing Program since then.'
const kikiDesc =
  'Born and raised in the North region of  China, she received traditional art training from an early age and graduated from LuXun Academy of Fine Art in 2011. Prior to moving to the US, she pursued her M.F.A in Painting at Savannah College of Art and Design in 2016. Working with drawing, painting and installations, her works involve a strong personal confession about spiritual position and her surrounding as a foreigner living in America. Mining memories and media constructions of social expectations, her works are charged with a grotesque, allegorical quality. Qi’s work has been wildly shown internationally and nationally in the U.S, Europe, Canada and China, including: Katzen Art Center (Washington. DC, U.S), Mi gallery(Paris, France), Crossing Art Space (Wuhan, China), Gallery 50 (Toronto,Canada), Laney Contemporary Fine Art (Savannah, GA) and more. Her works are also selected into many internationally art festival and art fair such as Heat Paris 2017, superfine! Miami 2016, Spectrum Miami art fair 2016, and define art festival 2015(Savannah, GA).'

export default class Team extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      haohao: false,
      xiaoxiao: false,
      anton: false,
      luqi: false,
      kiki: false,
    }
  }

  openedProfile = person => {
    let object = this.state

    if (person === 'haohao') {
      object = {
        haohao: true,
        xiaoxiao: false,
        anton: false,
        luqi: false,
        kiki: false,
      }
    }

    if (person === 'xiaoxiao') {
      object = {
        haohao: false,
        xiaoxiao: true,
        anton: false,
        luqi: false,
        kiki: false,
      }
    }

    if (person === 'anton') {
      object = {
        haohao: false,
        xiaoxiao: false,
        anton: true,
        luqi: false,
        kiki: false,
      }
    }

    if (person === 'luqi') {
      object = {
        haohao: false,
        xiaoxiao: false,
        anton: false,
        luqi: true,
        kiki: false,
      }
    }

    if (person === 'kiki') {
      object = {
        haohao: false,
        xiaoxiao: false,
        anton: false,
        luqi: false,
        kiki: true,
      }
    }

    this.setState({
      ...object,
    })
  }

  toggleOffPopup = () => {
    console.log('test')
  }

  render() {
    const { haohao, xiaoxiao, anton, luqi, kiki } = this.state

    return (
      <ParallaxLayer
        offset={1.8}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="team"
        onClick={this.toggleOffPopup()}
      >
        <div className="container team-container">
          {haohao && (
            <TeamDesc
              className="haohao"
              imgsrc="blue-bg.png"
              descrption={haohaoDesc}
              height={100}
              show={haohao}
              description={haohaoDesc}
            />
          )}
          {xiaoxiao && (
            <TeamDesc
              className="xiaoxiao"
              imgsrc="green-bg.png"
              descrption={xiaoxiaoDesc}
              height={100}
              show={xiaoxiao}
              description={xiaoxiaoDesc}
            />
          )}
          {anton && (
            <TeamDesc
              className="anton"
              imgsrc="orange-bg.png"
              descrption={antonDesc}
              show={anton}
              description={antonDesc}
            />
          )}
          {luqi && (
            <TeamDesc
              className="luqi"
              imgsrc="pink-bg.png"
              descrption={luqiDesc}
              show={luqi}
              description={luqiDesc}
            />
          )}
          {kiki && (
            <TeamDesc
              className="kiki"
              imgsrc="yellow-bg.png"
              descrption={kikiDesc}
              show={kiki}
              description={kikiDesc}
            />
          )}

          <h1 className="title">Team</h1>
          <div className="row-container">
            <div className="row">
              <div
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
          </div>
          <div className="row-container bottom-row">
            <div className="row">
              <div
                onClick={() => {
                  this.openedProfile('luqi')
                }}
              >
                <Image
                  imgsrc="luqi.png"
                  className="luqi-image team-img"
                  alt="luqi"
                  onClick={() => {
                    this.openedProfile('luqi')
                  }}
                />
              </div>
              <div
                onClick={() => {
                  this.openedProfile('kiki')
                }}
              >
                <Image
                  imgsrc="kiki.png"
                  className="team-img kiki-image"
                  alt="kiki"
                  onClick={() => {
                    this.openedProfile('kiki')
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    )
  }
}
