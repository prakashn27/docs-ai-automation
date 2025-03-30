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
    title: 'Create Custom Automations using AI',
    Svg: require('@site/static/img/flexible-icon.svg').default,
    description: (
      <>
        Flexibility at its core. Our AI creates automation based on your need. Just type and let AI handle the creating of automation.
      </>
    ),
  },
  {
    title: 'Time Saving',
    Svg: require('@site/static/img/save-time-icon.svg').default,
    description: (
      <>
        Type it out, and your automation is ready.
      </>
    ),
  },
  {
    title: 'Engineered for Security',
    Svg: require('@site/static/img/secure-vector-icon-2.svg').default,
    description: (
      <>
        Runs on Atlassian, Built on Forge. Your data never leaves the atalssian server.
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
