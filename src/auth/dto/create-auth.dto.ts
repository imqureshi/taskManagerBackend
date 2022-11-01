import { Length,IsString } from "class-validator";

export class CreateAuthDto {
    @IsString()
    @Length(3,20)
    username: string;
}
