var findMedianSortedArrays = function (nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => {
        return a > b ? 1 : -1;
    });
    let mid1 = merged.length / 2 - 1;
    let mid2 = merged.length / 2;
    if (merged.length % 2 === 1) {
        return merged[merged.length % 2];
    } else {
        return (merged[mid1] + merged[mid2]) / 2;
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
