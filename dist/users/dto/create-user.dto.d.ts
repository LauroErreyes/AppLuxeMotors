import { Role } from '../role.enum';
export declare class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly role: Role;
    readonly first_name: string;
    readonly last_name: string;
    readonly address: string;
    readonly phone: string;
    readonly foto: string;
}
