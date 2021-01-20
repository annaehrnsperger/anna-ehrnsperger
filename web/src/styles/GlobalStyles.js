import { createGlobalStyle } from 'styled-components';
import SuisseRegular from '../assets/fonts/SuisseIntl-Regular-WebM.woff2';
import SuisseRegularBold from '../assets/fonts/SuisseIntl-SemiBold-WebS.woff2';
import SuisseMono from '../assets/fonts/SuisseIntlMono-Regular-WebS.woff2';

const GlobalStyles = createGlobalStyle`

  html {
    font-family: var(--font-1);
    font-size: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-size: var(--fontsize-1);
    color: var(--white);
    background: var(--black);
    overflow-x: hidden;
  }

  ::selection {
    color: var(--white);
    background: var(--white);
  } 

  /* Typography */

  @font-face {
    font-family: 'Suisse Regular';
    src: url(${SuisseRegular});
  }

  @font-face {
    font-family: 'Suisse Regular Bold';
    src: url(${SuisseRegularBold});
  }

  @font-face {
    font-family: 'Suisse Mono';
    src: url(${SuisseMono});
  }

  .large {
    letter-spacing: var(--letter-spacing);
    line-height: 1.1;
  }

  .small {
    font-family: var(--font-1);
    font-size: var(--fontsize-2);
    line-height: 1.25;
    letter-spacing: 0.1px;
  }

  /* Images */

  .gatsby-image-wrapper {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
  }

  /* Spacing */

  .spacing-outer {
    margin: var(--v-spacing-S);
  }

  .spacing-inner {
    padding: var(--v-spacing-XL) var(--v-spacing-M);
  }

  .spacing-inner-small {
    padding: var(--v-spacing-S) var(--v-spacing-M);
  }

  .light {
    color: var(--black);
    background: var(--white);
  }

  .dark {
    color: var(--white);
    background: var(--black);
  }

`;

export default GlobalStyles;
