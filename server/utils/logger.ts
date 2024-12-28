import pino from 'pino'

const logger = () => {
  return pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  })
}

export default logger
