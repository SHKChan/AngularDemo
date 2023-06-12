import { BudgetAgencyTarget } from '../model/budget-agency-target';
export class ObjectConverter {
  // use array data to inilize an array of objects
  public static convertObjectsInArray<T>(arr: Array<any>, type: { new(v): T; }): Array<T> {
    let arrTyped = new Array<T>();
    arr.forEach(a => {
      arrTyped.push(Object.assign(new type(a), a))
    });

    return arrTyped;
  }

  // use object literal to update object data
  public static updateObjectWithoutLoosingReference<T>(objectToUpdate: T, objectWithNewValues: T): T {
    Object.keys(objectToUpdate).forEach((k) => {
      objectToUpdate[k] = objectWithNewValues[k];
    });

    return objectToUpdate;
  }
}