import { createGlobalStyle } from 'styled-components';

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
    --v-spacing-M: clamp(var(--spacing-S), 2vw, var(--spacing-M));
    /* Clamp Fallback */ --v-spacing-L: 10rem;
    --v-spacing-L: clamp(var(--spacing-L), 5vw, var(--spacing-XL));
    /* Clamp Fallback */ --v-spacing-XL: 17rem;
    --v-spacing-XL: clamp(var(--spacing-XL), 5vw, var(--spacing-XXL));

    /* Fonts */
    --font-1: 'Suisse Regular', sans-serif;
    --font-2: 'Suisse Mono', serif;
    /* Clamp Fallback */ --fontsize-1: calc(30px + (60 - 30) * (100vw - 375px) / (2560 - 375));
    --fontsize-1: clamp(3rem, 5vw, 6rem);
    /* Clamp Fallback */ --fontsize-2: calc(15px + (30 - 15) * (100vw - 375px) / (2560 - 375));
    --fontsize-2: clamp(1.5rem, 5vw, 3rem);
    --letter-spacing: 0.01rem;
    --line-height: 1.2;

    /* Border */
    --border-width: 1px;
    --border: var(--border-width) solid var(--text-color);

    /* Layout */
    --grid-cols: 12;
    --grid-gap: var(--spacing-S);

    /* Misc */
  }
`;

export default Variables;
