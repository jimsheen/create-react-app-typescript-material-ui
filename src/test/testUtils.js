/* eslint-disable */
// testUtils.js
/* global jest */
import React from 'react' // eslint-disable-line
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import AllProviders from '../providers/AllProviders'

jest.mock('react-router-dom', () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
    useLocation: () => ({
      pathname: '/',
    }),
    useHistory: () => ({
      push: jest.fn()
    }),
  };
});

const customRender = (ui, props = {}) => {
  const { state, options } = props
  return render(ui, {
    wrapper: ({ children }) => AllProviders({ children, state }),
    ...options
  })
}

export const RouterProvider = ({ children }) => {
  const history = createMemoryHistory()
  return (
    <Router history={history}>
      {children}
    </Router>
  )
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

export { render as defaultRender }
