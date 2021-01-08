import { createGlobalStyle } from 'styled-components';
import SuisseRegular from '../static/fonts/SuisseIntl-Regular-WebM.woff2';
import SuisseMono from '../static/fonts/SuisseIntlMono-Regular-WebS.woff2';

const GlobalStyles = createGlobalStyle`

  html {
    font-family: var(--font-1);
    color: var(--text-color);
    background: var(--bg-color);
    font-size: 10px;
  }

  body {
    font-size: var(--fontsize-1);
    line-height: var(--line-height);
  }

  /* Typography */

  @font-face {
    font-family: 'Suisse Regular';
    src: url(${SuisseRegular});
  }

  @font-face {
    font-family: 'Suisse Mono';
    src: url(${SuisseMono});
  }

  /* Images */

  .gatsby-image-wrapper {
    object-fit: cover;
    max-width: 100%;
    height: 100%;
  }

  /* Scrollbar */

  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  /* Spacing */

  .spacing-outer {
    margin: var(--v-spacing-S);
  }

  .spacing-inner {
    padding: var(--v-spacing-S);
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
