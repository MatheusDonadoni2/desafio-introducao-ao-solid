import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }
  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const all = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });
      return response.json(all);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
