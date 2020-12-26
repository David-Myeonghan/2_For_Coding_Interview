//Given 2 arrays, create a function that lets a user know (ture/false) whether these two arrays contain any common items.
//For wxample:
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
// should return false.
//
const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];
// Should return true.
//
// ------
// 2 parameters - arrays - no size limit
// return true of false.
// naive/brute force approach: netsted loops, O(n^2).
function containsCommonItem1(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; i++) {
			if (arr1[i] === arr2[j]) {
				return true;
			}
		}
	}
	return false;
}
// not efficient as there are two nested for loops: O(a*b)
// O(1) - Space compexity

// If we convert array1 into obj, could be better.
// array1 --> obj {
//    a: true,
//    b: true,
//    c: true,
//    x: true
//}
// array2[index] === obj.properties

function cotainsCommonItem2(arr1, arr2) {
	// loop through first array and create object where properties === items in the array
	let map = {};
	for (let i = 0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			// if map.a does not exist
			const item = array1[i];
			map[item] = true;
		}
	}
	// console.log(map);
	// loop through second array and check if item in second array exists on created object.
	for (let j = 0; j < arr2.length; j++) {
		if (map[arr2[j]]) {
			return console.log(true);
		}
	}
	return console.log(false);
}
// Two seperate for loops.
// O(a+b); Time Complexity.
// O(a) - Space Compexity

// cotainsCommonItem2(array1, array2);
// Can we assume always 2 params?

function containsCommonItem3(arr1, arr2) {
	return console.log(arr1.some((item) => arr2.includes(item)));
}

containsCommonItem3(array3, array4);
