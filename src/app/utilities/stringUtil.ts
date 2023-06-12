export class StringUtil {
    // like built-in pipe titlecase
    public static capitalizeFirstLetterOfEachWord(stringValue: string): string {
        let s = stringValue;
        let a: string[];
        if (s) {
            // return split words in string array
            a = s.split(" ");
        } else {
            a = [];
        }
        let newString: string[] = [];
        a.forEach((bb) => {
            let f = bb.toLowerCase();
            let r = f.charAt(0).toUpperCase() + f.slice(1);
            newString.push(r);
        });
        return newString.join(" ");
    }
}