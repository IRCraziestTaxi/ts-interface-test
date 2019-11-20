import { IReturnTypeQuery } from "src/_common/interfaces/return-type-query.interface";
import { User } from "../../../user/user.entity";

export class GetUsersQuery implements IReturnTypeQuery<User[]> {
    // https://github.com/microsoft/TypeScript/issues/35217
    public __type: User[];
}
