// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//const result = require('../result.json')
const fetch = require('isomorphic-unfetch')
export default (req, res) => {
let result = fetch('http://localhost:1983/leaderboard')
  .then( r => r.json() )
  .then( data => {return res.status(200).json(data)} )
  //return res.status(200).json(result)
return true
}
