import { IReturnTypeQuery } from "src/_common/interfaces/return-type-query.interface";
import { User } from "../../../user/user.entity";

// This produces no error although according to IReturnTypeQueryHandler,
// the type argument for this query should match TResult of GetUsersHandler,
// which is User[] rather than User.
// Omitting the implementation of this interface altogether (no "implements")
// also produces the same result (no error in the handler and "unknown" in the controller).
export class GetUsersQuery implements IReturnTypeQuery<User> { }
