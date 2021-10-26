import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ id: 1, name: "Test Player", email: "test@test.com"});
  }
}

export { handler }