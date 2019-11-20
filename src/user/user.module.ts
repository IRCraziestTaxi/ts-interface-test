import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { GetUsersHandler } from "./queries/get-users/get-users.handler";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [CqrsModule],
    controllers: [UserController],
    providers: [
        UserService,
        // Query handlers.
        GetUsersHandler
    ]
})
export class UserModule { }
