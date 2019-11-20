import { IQuery } from "@nestjs/cqrs";

export interface IReturnTypeQuery<TResult> extends IQuery {
    // https://github.com/microsoft/TypeScript/issues/35217
    __type: TResult;
}
