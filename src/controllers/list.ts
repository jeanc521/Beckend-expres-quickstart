import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { create } from "domain";

const prisma = new PrismaClient()

export default{
    create : async(req: Request, res: Response) => {
        const list = await prisma.list.create({data: req.body})
        return res.status(201).json(list)
    }
}