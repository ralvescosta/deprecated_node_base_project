const dotEnv = require('dotenv')

/**
 * @module Infrastructure
 * @description Configure Environment variables registers on .env.development or .env.application file
 */
export default {
  registerEnvironments: () => {
    const nodeEnv = process.env.NODE_ENV || 'development'
    dotEnv.config({ path: `.env.${nodeEnv}` })
  }
}
