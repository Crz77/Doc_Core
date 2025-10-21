import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/svg/undraw_easy_mes.svg').default,
    description: (
      <>
        Die Dokumentation ist ganz einfach aufgebaut. 
        Oben in der Leiste findest du die Bereiche, die du von der MES-Startseite kennst.
        Per Klick darauf, kommst du zur Dokumentation des jeweiligen Bereichs.
        Klick dich doch einfach durch &#128521;
      </>
    ),
  },
  {
    title: 'Brauchst du Hilfe?',
    Svg: require('@site/static/img/svg/undraw_help_mes.svg').default,
    description: (
      <>
        Wenn du bei etwas Hilfe brauchst, wir sind immer für dich da. 
        Unten stehen unsere Adressen, schreib uns einfach eine Mail mit deinem Anliegen.
      </>
    ),
  },
  {
    title: 'Suchst du etwas?',
    Svg: require('@site/static/img/svg/undraw_searching_mes.svg').default,
    description: (
      <>
        Du suchst nach etwas bestimmten? Gib rechts oben in der Suchleiste
        den Begriff ein, nachdem du suchen möchtest.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md"> 
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
