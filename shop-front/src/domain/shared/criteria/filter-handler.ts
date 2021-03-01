import { Filter } from "./filter";
import { FilterType } from "./filter-type";

export class FilterHandler<T> {

  public constructor(
    private readonly filters: Filter[],
    private readonly filterType: FilterType
  ) {}

  public filter(items: T[]): T[] {
    switch(this.filterType) {
      case FilterType.AND:
        return this.filterByAndType(items);
      case FilterType.OR:
        return this.filterByOrType(items);
      default:
        throw new Error(`Invalid filter type: ${this.filterType}`);
    };
  }

  public filterByOrType(items: T[]): T[] {
    return items
      .filter((type: T) => {
        return this.filters.some((f: Filter) => {
          const typeValue: string = String(type[f.key as keyof T]);
          return f.match(typeValue);
        });
      });
  }

  public filterByAndType(items: T[]): T[] {
    return items
      .filter((type: T) => {
        return this.filters.every((f: Filter) => {
          const typeValue: string = String(type[f.key as keyof T]);
          return f.match(typeValue);
        });
      });
  }
}