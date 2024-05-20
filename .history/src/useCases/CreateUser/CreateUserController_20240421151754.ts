import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      type,
      bio,
      birth_date,
    } = request.body;

    const authenticateUserUseCase = new CreateUserUseCase();
    try {
      const user = await authenticateUserUseCase.execute({
        username,
        email,
        password,
        firstName,
        lastName,
        bio,
        type,
        birth_date,
      });

      return response.json(user);
    } catch (err) {
      console.error(err);
      // If an error is caught, let the global error handler handle it
    }
  }
}