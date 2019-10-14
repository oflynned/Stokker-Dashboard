const {
  REACT_APP_API_ENDPOINT,
  NODE_ENV
} = process.env;

export const isProduction = NODE_ENV === 'production';

const defaultApiEndpoint = 'https://api.stacket.io';
const apiEndpoint = isProduction ? defaultApiEndpoint : REACT_APP_API_ENDPOINT;

const commonConfig = {
  apiEndpoint,
  graphQLEndpoint: `${apiEndpoint}/graphql`
};

export default commonConfig;
