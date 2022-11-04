Bootstrapped with Create React App

run `npm run start`

## Documentation

During the interview, it was mentioned that the team uses Material UI and styled components and I have used the same even though my experience with styled components is minimal. It took a fair few hours to ramp up on learning styled components as well as setting up the project to use MUI with SC engine.
The reson I did this, is because I feel this would be hugely beneficial to me and the team if I were to join the company so that I can hit the ground running with knowledge of the same tech stack.


### Packages used
- Material UI
- styled components
- react query (haven't used this before but is very similar to redux toolkit query)
- Storybook - for visually testing components
- create barrel folder - this is my own package I use to easily generate barrel folders with commonly used React files - https://www.npmjs.com/package/create-barrel-folder

### Project setup

- I used create-react-app as a boilerplate for this project with TypeScript template
- Use react-app-rewired to extend create-react-app webpack config to use styled-components engine with MUI 

config-overrides.js
```
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
      "<rootDir>/src": "<rootDir>/src",
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }

    return config;
  }
};

```

- Use babel-import in .babelrc to treeshake MUI packages and reduce bundle size

### Tests
To meet the requirements in a timely manner - I didn't focus too heavily on writing unit tests - however I wrote one for the hook `useSearchInput` covering debounce functionality

### Folder structure
- app - stores the main application component
- components - presentational UI components
- const - global constants e.g. API_URL
- context
  - Search context - responsible for getting and setting URL params based on search results
- hooks - reusable hooks
  - useSearchInput - debounced search input and enter key handler (used with SearchInput component)
- layout - layout components e.g. header, footer, main etc.
  - Main - main app container 
- mocks - contain example data responses from the API. In past projects I have used mock servers to prevent unnecessary API calls
- modules - components that have logic e.g. fetching data from an API OR have specific uses / custom styling/functionality etc. Modules handle and route data to other components (usually presentational)
- providers - bundle all dependant app providers into one file for easy import
- test - contains testUtils which is a wrapper around react testing library default render function
- theme - styled components theme definitions
- types - TypeScript type definitions
- views - app pages/views

### Notes
- Search response does not contain id or category so I added them to the response of each request and extended the response type in `types/types.ts`

```
export type ExtendedResponse<T extends {}> = {
  label: string;
  category: CategoryTypes;
} & T

export type AllExtendedResponse = ExtendedResponse<PeopleResponse> | ExtendedResponse<PlanetResponse> | ExtendedResponse<VehiclesResponse>
```

- Using Context to hold the Search state:
Initially when I thought I was going to use nested routes - I wanted to avoid prop drilling by using context exported as a hook. However, I was able to keep the structure flat and avoid prop drilling but kept SearchContext as the high level state manager
- Disable automated refect on window focus react-query


### Issues

- Ran into a problem running tests with craco test due to a known issue with CRA 5 - https://github.com/gsoft-inc/craco/issues/353
downgrading to CRA (react-scripts package) to 4.0.3 did not work so switching to react-app-rewired

- Json2ts converting the following to date but is actually a string

```
created: string;
edited: string;
```

- Attempted to use react router for handling routes but the version has been updated to 6 and the API has changed slightly so I just set the routes manually in `SearchContext`

- Issue with adding too many items to material UI data grid (films list) - box does not have overflow so added above the table

### Additions
- handle no results for detail page
- check if url params are correct when entering the app e.g.
- focus input on page load
