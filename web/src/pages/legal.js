import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import SEO from '../components/organisms/seo';
import Layout from '../components/organisms/layout';
import Nav from '../components/molecules/nav';

const LegalPage = () => (
  <Layout>
    <SEO siteTitle="Legal" />
    <Nav onClick={() => navigate('/')} />
    <StyledLegalPage className="spacing-inner">
      <p className="large">Legal Notice</p>
      <p className="small">
        Anna Ehrnsperger <br />
        Munich, Germany <br />
        hallo@annaehrnsperger.de <br />
        +49 160 97034615
      </p>
      <p className="small">
        The contents of this page have been created with the utmost care.
        However, I cannot guarantee the contents' accuracy, completeness or
        topicality. According to statutory provisions, I am furthermore
        responsible for my own content on these web pages. In this matter,
        please note that I am not obliged to monitor the transmitted or saved
        information of third parties, or investigate circumstances pointing to
        illegal activity. My obligations to remove or block the use of
        information under generally applicable laws remain unaffected by this as
        per §§ 8 to 10 of the Telemedia Act (TMG). Responsibility for the
        content of external links (to web pages of third parties) lies solely
        with the operators of the linked pages. No violations were evident to me
        at the time of linking. Should any legal infringement become known to
        me, I will remove the respective link immediately. My web pages and
        their contents are subject to German copyright law. Unless expressly
        permitted by law, every form of utilizing, reproducing or processing
        works subject to copyright protection on my web pages requires the prior
        consent of the respective owner of the rights. Individual reproductions
        of a work are only allowed for private use. The materials from these
        pages are copyrighted and any unauthorized use may violate copyright
        laws.
      </p>
    </StyledLegalPage>
  </Layout>
);

const StyledLegalPage = styled.section`
  min-height: 100vh;

  .large {
    padding-top: var(--spacing-XXL);
    padding-bottom: var(--v-spacing-S);
  }

  .small {
    padding-bottom: var(--v-spacing-S);
  }
`;

export default LegalPage;
