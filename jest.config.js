/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.[jt]s?(x)"],
  coverageDirectory: ".coverage",
  verbose: true,
  projects: [
    {
      displayName: "Node.js",
      testEnvironment: "node",
      rootDir: "./",
      testMatch: ["<rootDir>/tests/**/*.[jt]s"],
    },
  ],
};
