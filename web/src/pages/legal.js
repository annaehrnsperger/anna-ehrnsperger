import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SEO from '../components/organisms/seo';
import Layout from '../components/organisms/layout';
import Nav from '../components/molecules/nav';

const LegalPage = () => (
  <Layout>
    <SEO siteTitle="Legal" />
    <Link to="/">
      <Nav />
    </Link>
    <StyledLegalPage className="spacing-inner">
      <p className="small" style={{ paddingTop: 'var(--spacing-XXL)' }}>
        Anna Ehrnsperger <br />
        Nadistr. 131 <br />
        Munich, Germany <br />
        hallo at annaehrnsperger.de <br />
        +49 160 97034615
      </p>
      <p className="large">Disclaimer</p>
      <p className="small">
        Information in accordance with Section 5 TMG. <br />
        The contents of this page have been created with the utmost care.
        However, I cannot guarantee the contents' accuracy, completeness or
        topicality. According to statutory provisions, I am furthermore
        responsible for my own content on these web pages. In this matter,
        please note that I am not obliged to monitor the transmitted or saved
        information of third parties, or investigate circumstances pointing to
        illegal activity. My obligations to remove or block the use of
        information under generally applicable laws remain unaffected by this as
        per §§ 8 to 10 of the Telemedia Act (TMG).
        <br />
        <br />
        Responsibility for the content of external links (to web pages of third
        parties) lies solely with the operators of the linked pages. No
        violations were evident to me at the time of linking. Should any legal
        infringement become known to me, I will remove the respective link
        immediately.
        <br />
        <br />
        My web pages and their contents are subject to German copyright law.
        Unless expressly permitted by law, every form of utilizing, reproducing
        or processing works subject to copyright protection on my web pages
        requires the prior consent of the respective owner of the rights.
        Individual reproductions of a work are only allowed for private use. The
        materials from these pages are copyrighted and any unauthorized use may
        violate copyright laws.
      </p>
      <p className="large">Privacy Policy</p>
      <p className="small">
        All personal information is treated confidentially and in accordance
        with the legal requirements, as explained in this privacy policy. This
        website can be used without providing any personal data. However, if at
        any time personal data such as name, address or e-mail is requested,
        this will be done on a voluntary basis.
        <br />
        <br />
        The website automatically collects and stores data in server log files
        that are transmitted by your browser. Collected may be: Browser type and
        version, operating system, referrer URL, host name of the accessing
        computer and time of the server request. This data is not personal and
        is not merged with other data sources. If I become aware of concrete
        indications of illegal use, I reserve the right to check this data
        retrospectively.
        <br />
        <br />
        The data controller shall process and store the personal data of the
        data subject only for the period necessary to achieve the purpose of
        storage, or as far as this is granted by the European legislator or
        other legislators in laws or regulations to which the controller is
        subject to.
        <br />
        <br />
        Disclosure to third parties <br />
        I only disclose your personal data to third parties in the following
        cases:
        <br />
        Article 6.1.b (necessary for the establishment or implementation of a
        contractual relationship)
        <br />
        Article 6.1.f (necessary for the pursuit of legitimate purposes and
        interests)
        <br />
        For other purposes, I will not disclose your personal data to third
        parties without your consent.
        <br />
        <br />
        Your rights <br />
        You have the right to request access to, rectification or erasure of
        your personal data. You also have the right to have the processing of
        your personal data restricted. You have the right to withdraw any
        consent you have given, e.g. to receive an email newsletter, at any
        time. In the event of a breach of data protection regulations, you have
        the right to lodge a complaint with the competent supervisory authority
        (Bavarian State Office for Data Protection Supervision).
        <br />
      </p>
    </StyledLegalPage>
  </Layout>
);

const StyledLegalPage = styled.section`
  min-height: 100vh;

  .large {
    padding-top: var(--v-spacing-XL);
    padding-bottom: var(--v-spacing-S);
  }

  .small {
    padding-bottom: var(--v-spacing-S);
  }
`;

export default LegalPage;
