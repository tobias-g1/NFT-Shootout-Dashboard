import './team.scss'
import team1 from '../../../assets/images/team-1.png'
import team2 from '../../../assets/images/team-2.png'
import team3 from '../../../assets/images/team-3.png'
import team4 from '../../../assets/images/team-4.png'
import team5 from '../../../assets/images/team-5.png'
import team6 from '../../../assets/images/team-6.png'
import team7 from '../../../assets/images/team-7.png'
import team8 from '../../../assets/images/team-8.png'
import linkedin from '../../../assets/images/team-linkedin.png'
import youtube from '../../../assets/images/team-youtube.png'
import twitter from '../../../assets/images/twitter.png'

export default function Team() {
    const team = [
        {
            "img": team1,
            "name": 'Rick Hill',
            "position": 'Co-Founder',
            'linkedin': linkedin,
            'linkedinLink': 'https://www.linkedin.com/in/rickhill1'
        },
        {
            "img": team2,
            "name": 'Sulayman Williamson',
            "position": 'Co-Founder',
            'linkedin': linkedin,
            "linkedinLink": 'https://www.linkedin.com/in/sulayman-williamson-2007a630/'
        },
        {
            "img": team3,
            "name": 'Bart Baker',
            "position": 'Social Media Advisor',
            'twitter': twitter,
            'youtube': youtube,
            'twitterLink': 'https://twitter.com/BartBaker',
            "youtubeLink": 'https://www.youtube.com/bartbaker'
        },
        {
            "img": team4,
            "name": 'Mark Jones',
            "position": 'Dev',
        },
        {
            "img": team5,
            "name": 'Martin Wood',
            "position": 'Social Media Director',
        },
        {
            "img": team6,
            "name": 'Akeem Adenuga',
            "position": 'Social Media Community Manager',
        },
        {
            "img": team7,
            "name": 'Planktroneum',
            "position": 'Advisor',
        },
        {
            "img": team8,
            "name": 'Luke Slater',
            "position": 'User Acquisition Specialist',
        }
    ]
  return (
    <div className='meet-team container' id="team">
        <h2 className='mt-0'>Meet the team</h2>

        <div className='team-wrapper flex flex-wrap'>
            {team.map((data, index) => (
                <div className='team animation fadeIn' key={index}>
                    <img src={data.img} alt=''/>
                    <h4 className='member-name'>{data.name}</h4>
                    <p className='position'>{data.position}</p>
                    <div className='social'>
                        {data.linkedin && 
                            <a href={data.linkedinLink} target="_blank" rel="noreferrer">
                                <img src={data.linkedin} alt="linkedin" />
                            </a>
                        }
                        {data.twitter && 
                            <a href={data.twitterLink} target="_blank" rel="noreferrer">
                                <img src={data.twitter} alt="twitter" />
                            </a>
                        }
                        {data.youtube && 
                            <a href={data.youtubeLink} target="_blank" rel="noreferrer">
                                <img src={data.youtube} alt="youtube" />
                            </a>
                        }</div>
                </div>
            ))}
        </div>
    </div>
  )
}
