import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Sudocu',
    src: '/img/sudocu.svg',
    description: (
      <>
        Sistema Único Documental
      </>
    ),
  },
  {
    title: 'Pilagá',
    src: '/img/pilaga.svg',
    description: (
      <>
       Módulo económico, presupuestario, financiero y contable
      </>
    ),
  },
  {
    title: 'Diaguita',
    src: '/img/diaguita.svg',
    description: (
      <>
        Módulo de compras, contrataciones y patrimonio
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
