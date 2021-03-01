import { FilterOperator } from "./filter-operator";

export class Filter {

  public constructor(
    readonly key: string,
    readonly value: string,
    readonly operator: FilterOperator
  ) {}

  public match(typeValue: string): boolean {
    switch(this.operator) {
      case FilterOperator.CONTAINS:
        return this.contains(typeValue);
      case FilterOperator.EQUALS:
        return this.equals(typeValue);
      default:
        throw new Error(`Invalid filter operator: ${this.operator}`);
    };
  }

  public contains(typeValue: string): boolean {
    return typeValue.toLowerCase().startsWith(this.value.toLowerCase());
  }

  public equals(typeValue: string): boolean {
    return typeValue.toLowerCase() == this.value.toLowerCase();
  }
}