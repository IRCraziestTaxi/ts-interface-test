import { QueryBus } from "@nestjs/cqrs";
import { IReturnTypeQuery } from "./interfaces/return-type-query.interface";

export abstract class ReturnTypeService {
    private readonly _queryBus: QueryBus;

    public constructor(
        queryBus: QueryBus
    ) {
        this._queryBus = queryBus;
    }

    public async query<TResult>(query: IReturnTypeQuery<TResult>): Promise<TResult> {
        return this._queryBus.execute(query);
    }
}
