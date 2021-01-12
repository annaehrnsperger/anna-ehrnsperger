import { createGlobalStyle } from 'styled-components';
import SuisseLight from '../assets/fonts/SuisseIntl-Light-WebS.woff2';
import SuisseRegular from '../assets/fonts/SuisseIntl-Regular-WebM.woff2';
import SuisseMono from '../assets/fonts/SuisseIntlMono-Regular-WebS.woff2';

const GlobalStyles = createGlobalStyle`

  html {
    font-family: var(--font-1);
    color: var(--text-color);
    background: var(--bg-color);
    font-size: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    font-size: var(--fontsize-1);
  }

  /* Typography */

  @font-face {
    font-family: 'Suisse Light';
    src: url(${SuisseLight});
  }

  @font-face {
    font-family: 'Suisse Regular';
    src: url(${SuisseRegular});
  }

  @font-face {
    font-family: 'Suisse Mono';
    src: url(${SuisseMono});
  }

  .big {
    letter-spacing: var(--letter-spacing);
    line-height: 1.1;
  }

  .small {
    font-family: var(--font-3);
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
    padding: var(--v-spacing-M);
  }

  .spacing-removed {
    margin-left: calc(var(--v-spacing-S) * -1);
    margin-bottom: calc(var(--v-spacing-S) * -1);
  }

  /* Layout */

  .grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-cols), 1fr);
    gap: var(--spacing-XS);

    * {
      grid-column: 1 / calc(var(--grid-cols) + 1);
    }
  }

  .dark {
    color: var(--white);
    background: var(--black);
  }

  .light {
    color: var(--black);
    background: var(--white);
  }

`;

export default GlobalStyles;
