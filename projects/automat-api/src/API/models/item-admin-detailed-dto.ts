/* tslint:disable */
/* eslint-disable */
import { UserAdmiBorrowDto } from './user-admi-borrow-dto';
export interface ItemAdminDetailedDto {
  borrows?: null | Array<UserAdmiBorrowDto>;
  categorieId?: number;
  description?: null | string;
  id?: number;
  image?: null | string;
  name?: null | string;
  price?: number;
  subName?: null | string;
}
