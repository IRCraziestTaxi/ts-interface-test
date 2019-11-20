import { QueryHandler } from "@nestjs/cqrs";
import { IReturnTypeQueryHandler } from "../../../_common/interfaces/return-type-query-handler.interface";
import { User } from "../../user.entity";
import { GetUsersQuery } from "./get-users.query";

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IReturnTypeQueryHandler<GetUsersQuery, User[]> {
    public async execute(query: GetUsersQuery): Promise<User[]> {
        return [];
    }
}
