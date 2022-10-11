import { addDoc, collection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../services/firebase";

export default async function createCustomer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await addDoc(collection(db, "customer"), {
    name:  `${req.body.name}`,
    age: `${req.body.age}`
  });

  return res.json('ok true')

}
