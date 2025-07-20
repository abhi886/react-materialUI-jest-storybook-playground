// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  // Jest will go to the next js config file and then it will load or reference the next js file. Okay this is necessary to make
  // jest work same like your next js project.
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // You are telling Jest to **run a setup file** before any tests start.
  // This file usually imports useful things like extra matchers from `@testing-library/jest-dom`.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // You set the test environment to jsdom, which simulates a browser
  // so you can test React components (since they usually run in the browser)
  testEnvironment: 'jest-environment-jsdom',
  // Yesle chai test file ma absolute import use garna dinxa.
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  // ts jest vaneko chai, it will know how to read typescript files.
  preset: 'ts-jest',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
