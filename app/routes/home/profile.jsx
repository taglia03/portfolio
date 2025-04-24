import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Ciao" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Mi chiamo Riccardo, attualmente vivo a Lainate (Mi) e sto cercando lavoro come
      sviluppatore. 
      I miei progetti includono diversi linguaggi di programmazione, framework
      e librerie. Questo mi ha permesso di sperimentare diverse tecnologie e progetti
      di varia natura.
      Se sei interessato alle tecnologie che ho utilizzato dai un'occhiata
      alla pagina relativa alle <Link href="/uses">tecnologie utilizzate</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Durante il mio tempo libero mi piace praticare Calisthenics, Correre e utilizzare
      {' '} <Link href="/projects/volkihar-knight">python</Link> per automatizzare alcune
      task della mia giornata. Sono inoltre sempre molto interessato all'utilizzo
      dell'intelligenza artificiale in nuovi progetti e alla sua implementazione per
      migliorare la nostra vita
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Chi sono
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Foto professionale di me che non sorrido mai"
                />
                {/* Scritta Giapponese */}
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#hacked-vertical`}/>
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
