import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://marketplace.atlassian.com/apps/1237112/ai-automation-for-jira?hosting=cloud&tab=overview">
            Install on Atlassian Marketplace 🔗
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Create custom automation in just 2 minutes using AI with minimal effort.">
      <HomepageHeader />
      <div style={{
        display: 'grid',
        placeItems: 'center',
        margin: '20px',
        // height: '100vh'
      }}><iframe width="560" height="315" src="https://www.youtube.com/embed/WjZ3GN25mBU?si=PcINumkzOJ8G4gnW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      <main>
        <HomepageFeatures />
      </main>

    </Layout>
  );
}
