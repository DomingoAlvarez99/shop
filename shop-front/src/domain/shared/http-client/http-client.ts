export interface HttpClient<T> {
  get(id: string): T;
  post(object: T): void;
  put(object: T): void;
  delete(id: string): void;
}
