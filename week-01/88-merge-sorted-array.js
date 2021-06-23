var merge = function(nums1, m, nums2, n) {
    let i = m - 1,
        j = n - 1;
    for (let k = m + n - 1; k >= 0; k--) {
        if (j < 0 || (i >= 0 && nums1[i] >= nums2[j])) {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
    }
};