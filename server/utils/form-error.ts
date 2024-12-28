import type { ValidationError } from 'yup'

type Errors = { [key: string]: string[] }

const parse = (error: ValidationError): Errors => {
  const errors: Errors = {}

  error.inner.forEach((error) => {
    const path = error.path

    if (!path) {
      return
    }

    errors[path] = [...(errors[path] || []), error.message]
  })

  return errors
}

export default { parse }
