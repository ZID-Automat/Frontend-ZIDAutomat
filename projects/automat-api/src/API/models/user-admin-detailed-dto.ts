/* tslint:disable */
/* eslint-disable */
import { UserAdmiBorrowDto } from './user-admi-borrow-dto';
export interface UserAdminDetailedDto {
  borrow?: null | Array<UserAdmiBorrowDto>;
  id?: number;
  joined?: string;
  nachname?: null | string;
  name?: null | string;
  vorname?: null | string;
}
