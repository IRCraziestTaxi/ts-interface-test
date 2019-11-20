import { IQueryHandler } from "@nestjs/cqrs";
import { IReturnTypeQuery } from "./return-type-query.interface";

export interface IReturnTypeQueryHandler<TQuery extends IReturnTypeQuery<TResult>, TResult>
    extends IQueryHandler<TQuery, TResult> { }
