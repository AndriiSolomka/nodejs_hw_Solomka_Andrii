import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json("Hello world");
});

router.get("/healthcheck", (req: Request, res: Response) => {
  res.json({
    live: true,
    timestamp: new Date().toISOString(),
  });
});

export default router;
