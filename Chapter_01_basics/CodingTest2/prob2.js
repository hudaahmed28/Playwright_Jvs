//array of results stored first
const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]

//start the count and set testresults value to 0
let passed = 0;
let failed = 0;
let skiped = 0;

//now define the loop as how many times it should run. we use .length so that runs the length of the array.
for (i=0; i<testResults.length; i++) {

//use switch satement to define the cases
switch (testResults[i]){
case "pass":
      passed++;  //inc the count
      break;
    case "fail":
      failed++;  //inc the count
      break;
    case "skip":
      skiped++; //inc the count
      break;
    default:
      console.log(`UNKNOWN RESULT: ${testResults[i]}`);
}}
// Total tests
const totalTests = testResults.length;
// percentage calculator
const passRate = (passed / totalTests) * 100;
console.log(passRate + "%");

// Verdict
let verdict;
if (failed === 0) {
  verdict = "Ready for release";
} else if (failed <= 2) {
  verdict = "Review";
} else {
  verdict = "Block";
}
console.log("Test Report");
console.log(`Total tests: ${totalTests}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Skipped: ${skiped}`);
console.log(`Pass rate: ${passRate}%`);
console.log(`Verdict: ${verdict}`);