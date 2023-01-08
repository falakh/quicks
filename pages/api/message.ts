import { NextApiRequest, NextApiResponse } from "next";
import { chatListDummy } from "../../dummy-data/chat-list";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(chatListDummy);
}
