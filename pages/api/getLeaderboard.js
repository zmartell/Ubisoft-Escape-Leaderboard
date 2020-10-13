// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const result = require('../result.json')

export default (req, res) => {
  return res.status(200).json(result)
}
