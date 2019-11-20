import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        // Entity modules.
        UserModule
    ],
    controllers: [],
    providers: []
})
export class AppModule { }
