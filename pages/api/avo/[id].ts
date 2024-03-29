import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const idAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()

  const id = req.query.id
  const avo = await db.getById(id as string)

  /* res.statusCode = 200
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify({ data: avo })) */

  res.status(200).json(avo)
}

export default idAvo
