import styles from './social.module.scss'
import { SOCIALS } from "../data/socials"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Card } from '../components/card/card'
import DefaultPage from "../templates/default-page/default-template"

const Social = (props) => {

  return (
    <DefaultPage title="Social" className={styles.socialPage}>
      <div className={styles.socialWrapper}>
        {
          SOCIALS.map(social => (
            <Card as="a" href={social.url} className={styles.cardStyle}>
              {
                social.icon 
                  ? <FontAwesomeIcon 
                      icon={social.icon} 
                      title={social.name} 
                      size="2x"
                    /> 
                  : social.name
              }
              {social.username}
            </Card>
          ))
        }
      </div>
    </DefaultPage>
  )
}

export default Social