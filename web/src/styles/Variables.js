import { createGlobalStyle } from 'styled-components';
import { media } from '../utils/media-queries';

const Variables = createGlobalStyle`

  :root {
    /* Colors */
    --black: #131313;
    --white: #ffffff;

    /* Spacing */
    --spacing-XXS: 1rem;
    --spacing-XS: 2rem;
    --spacing-S: 3rem;
    --spacing-M: 5rem;
    --spacing-L: 8rem;
    --spacing-XL: 13rem;
    --spacing-XXL: 21rem;

    /* Variable Spacing */
    /* Clamp Fallback */ --v-spacing-S: var(--spacing-XS);
    --v-spacing-S: clamp(var(--spacing-XXS), 2vw, var(--spacing-S));
    /* Clamp Fallback */ --v-spacing-M: 4rem;
    --v-spacing-M: clamp(var(--spacing-XS), 3vw, var(--spacing-M));
    /* Clamp Fallback */ --v-spacing-L: 10rem;
    --v-spacing-L: clamp(var(--spacing-M), 5vw, var(--spacing-L));
    /* Clamp Fallback */ --v-spacing-XL: 17rem;
    --v-spacing-XL: clamp(var(--spacing-L), 5vw, var(--spacing-XXL));

    /* Fonts */
    --font-1: 'Suisse Regular', sans-serif;
    --font-2: 'Suisse Mono', serif;
    --font-3: 'Suisse Regular Bold', sans-serif;
    /* Clamp Fallback */ --fontsize-1: calc(30px + (60 - 30) * (100vw - 375px) / (2560 - 375));
    --fontsize-1: clamp(4rem, 10vw, 14rem);
    /* Clamp Fallback */ --fontsize-2: calc(15px + (25 - 15) * (100vw - 375px) / (2560 - 375));
    --fontsize-2: clamp(1.5rem, 2vw, 2.6rem);
    /* Clamp Fallback */ --fontsize-3: calc(22px + (46 - 22) * (100vw - 375px) / (2560 - 375));
    --fontsize-3: clamp(2.2rem, 3vw, 4.6rem);
    --letter-spacing: -0.1rem;

    /* Border */
    --border-width: 1px;
    --border: var(--border-width) solid var(--text-color);

    /* Layout */
    --grid-cols: 12;
    --grid-gap: var(--spacing-S);

    /* Misc */

    @media ${media.M} {
      --letter-spacing: -0.4rem;
    }
  }
`;

export default Variables;
