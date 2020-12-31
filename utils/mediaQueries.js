export const breakpoints = {
    sm: 20,
    md: 30,
    lg: 45,
    xl: 60
  };
  
  export const mediaQueries = key => {
    return style => `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
  };