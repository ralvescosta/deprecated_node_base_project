module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/index.ts',
    '!<rootDir>/src/routes.ts',
    '!<rootDir>/src/server.ts',
    '!<rootDir>/src/core/**/*.ts',
    '!<rootDir>/src/**/tables/*.ts',
    '!<rootDir>/src/**/adapters/*.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
  }
}
