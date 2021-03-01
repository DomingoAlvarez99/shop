import { FilterHandler } from "./filter-handler";

export class Criteria<T> {

  public constructor(
    private readonly filterHandler: FilterHandler<T>,
    private readonly page: number,
    private readonly size: number
  ) {}

  public handle(items: T[]) : T[] {
    return this.paginate(this.filter(items));
  }

  private filter(items: T[]): T[] {
    return this.filterHandler.filter(items);
  }

  private paginate(items: T[]): T[] {
    const offset: number = this.page * this.size;

    return items.slice(offset).slice(0, this.size);
  }
}