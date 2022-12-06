import { NextApiRequest, NextApiResponse } from "next"
import { Readable } from 'stream'



export default async (req: NextApiRequest, res: NextApiResponse) => {

   res.status(200).json({ ok: true})
}