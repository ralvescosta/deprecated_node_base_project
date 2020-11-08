module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.module.ts',
    '!<rootDir>/src/**/__test__',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/routes.ts',
    '!<rootDir>/src/server.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
  }
}
