// backend/src/middleware/auth.ts
import { NextFunction, Request, Response } from "express";
import { ForbiddenError, UnauthorizedError } from "../config/error";
import { verifyAccess } from "../config/jwt";
import User from "../models/User";


declare global {
    namespace Express{
        interface Request {
            user?: any
        }
    }
}


// Protect routes - requires authentication
export const protect = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token;

        // check authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split("")[1]
        }

        if (!token) {
            throw new UnauthorizedError("You are not logged in. please log in to access the resources");
        }

        // verification
        const decoded = verifyAccess(token);
        // const userId = decoded.id as string;
        const userId = decoded.id;

        // check if user still exists
        const user = await User.findOne(userId);
        if (!user) {
            throw new UnauthorizedError("The user belonging to this token no longer exists.");
        }

        // Grant access
        req.user = user;
        next()
    } catch (error) {
        
    }
}

// Restrict to specific roles
export const restrictTo = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      throw new UnauthorizedError('You are not logged in');
    }

    if (!roles.includes(req.user.role)) {
      throw new ForbiddenError('You do not have permission to perform this action');
    }

    next();
  };
};


// check i email is gen