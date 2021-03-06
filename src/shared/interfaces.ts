export enum Status {
  DELETED = 'Deleted',
}

export interface IDeleteRequestResponse {
  status: string;
}

export interface Paginated<T> {
  page: number;
  limit: number;
  total: number;
  next: string;
  value: T;
}

export interface ILoginResponse {
  access_token: string;
}
