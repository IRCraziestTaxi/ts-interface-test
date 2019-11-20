import { IQuery } from "@nestjs/cqrs";

export interface IReturnTypeQuery<TResult> extends IQuery { }
