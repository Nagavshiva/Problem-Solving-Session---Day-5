// .............................................Problems..............................................//


// 1.Write a function that performs a linear search on an array.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element if found
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}


const array = [5, 3, 8, 2, 9, 1];
const targetElement = 8;
const resultIndex = linearSearch(array, targetElement);
if (resultIndex !== -1) {
    console.log(`The target element ${targetElement} is found at index ${resultIndex}.`);
} else {
    console.log(`The target element ${targetElement} is not found in the array.`);
}


// 2.Write a function that performs a binary search on a sorted array.


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];

        if (midValue === target) {
            return mid; // Return the index of the target element if found
        } else if (midValue < target) {
            left = mid + 1; // Discard the left half
        } else {
            right = mid - 1; // Discard the right half
        }
    }

    return -1; // Return -1 if the target element is not found in the array
}


const sortedArray = [1, 2, 3, 5, 8, 9];
const targetedElement = 8;
const resultIndexx = binarySearch(sortedArray, targetedElement);
if (resultIndexx !== -1) {
    console.log(`The target element ${targetedElement} is found at index ${resultIndexx}.`);
} else {
    console.log(`The target element ${targetedElement} is not found in the array.`);
}







// 3.Explain the concept of Big O notation and analyze the time complexity of the linear and binary search algorithms.

// Big O notation:

// . Big O notation is a mathematical notation used in computer science to describe the upper bound of the time complexity or space complexity of an algorithm in terms of the input siz
// .It provides a standardized way of expressing the efficiency of an algorithm, especially with respect to how its performance scales as the size of the input increases.



//  1. Linear Search:

// . In a linear search, we iterate through each element of the list until we find the target element or reach the end of the list.
// .Time Complexity: O(n), where n is the number of elements in the list.
// .This means that the time taken by the linear search grows linearly with the size of the input list. In the worst case, we might have to iterate through all the elements to find the target.


//  2.Binary Search:

// .Binary search is a divide and conquer algorithm used to find an element in a sorted list.
// .It compares the target value with the middle element of the list and eliminates half of the remaining elements based on the comparison.
// .Time Complexity: O(logn), where n is the number of elements in the sorted list.
// In each step, the search space is divided in half, leading to a logarithmic time complexity. This means that as the size of the input list increases, the time taken by binary search increases logarithmically.