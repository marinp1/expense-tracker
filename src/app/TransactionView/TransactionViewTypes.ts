import { Moment } from 'moment';

export enum TRANSACTION_TYPE {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

/* tslint:disable:interface-name object-literal-sort-keys  */
export interface Category {
  name: string;
  icon: string;
}

// TODO: Add tags
export interface Transaction {
  uuid: string;
  type: TRANSACTION_TYPE;
  bankName: string;
  accountName: string;
  datetime: Moment;
  stakeholder: string;
  category: Category;
  message: string;
  amount: number; // in cents
}