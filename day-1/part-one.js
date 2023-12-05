import fs from "fs";

const testVals = [`1abc2`, `pqr3stu8vwx`, `a1b2c3d4e5f`, `treb7uchet`].map(
  (item) => item.replace(/\D/g, "")
);

const allVals = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((item) => {
    const firstDigit = item.match(/\d/);
    const lastDigit = item.match(/\d(?=\D*$)/);
    return firstDigit && lastDigit ? firstDigit[0] + lastDigit[0] : "00";
  });

const sum = allVals.reduce((prev, cur) => parseInt(prev) + parseInt(cur), 0);

console.log(sum);
