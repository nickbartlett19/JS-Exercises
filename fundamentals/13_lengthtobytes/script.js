function lengthToBytes(string) {
    return new Blob([string]).size;
}

const str1 = "abc";
const str2 = "defghi";
const str3 = "delightful nuggets";

console.log(lengthToBytes(str1));
console.log(lengthToBytes(str2));
console.log(lengthToBytes(str3));