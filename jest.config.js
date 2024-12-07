module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'], 
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    coverageDirectory: './coverage',
    collectCoverageFrom: ['src/**/*.ts'],
    clearMocks: true
  };
  