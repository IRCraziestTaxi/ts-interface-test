import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { GetUsersQuery } from "./queries/get-users/get-users.query";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
    private readonly _userService: UserService;

    public constructor(
        userService: UserService
    ) {
        this._userService = userService;
    }

    @Get()
    public async getUsers(
        @Res()
        response: Response
    ): Promise<Response> {
        const users = await this._userService.query(new GetUsersQuery());

        return response.status(200).json({
            data: users
        });
    }
}
