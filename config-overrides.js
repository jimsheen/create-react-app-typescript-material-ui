module.exports = {
  webpack: function (config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }
    return config;
  },
  jest: function (config) {
    config.moduleNameMapper = {
      ...config.moduleNameMapper,
      '<rootDir>/src': '<rootDir>/src',
      '@mui/material': '@mui/material',
      '@mui/x-data-grid': '@mui/x-data-grid',
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }

    return config;
  }
};
