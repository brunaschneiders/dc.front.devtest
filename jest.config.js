module.exports = {
  testIgnorePatterns: ["/node_modules", "/.storybook", "/.path", "/src/stories"],
  setupFilesAfterEnv:[
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: "jsdom"
}