export class EnumUtil {

    public static enumToArray(enumToConvert: any): any[] {
        let arr: any[] = [];
        // retrive an array of property name(key) of the enum type
        let keys = Object.keys(enumToConvert);
        // map: used to transform elements of an array and create a new array based on the transformation. It takes a callback function as an argument and applies it to each element of the array.
        // enum_type[key] = value
        return keys.map(k => enumToConvert[k]);
    }

}