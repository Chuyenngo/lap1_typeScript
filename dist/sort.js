var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function sortArray(arr, sortCallback) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (sortCallback(arr[i], arr[j]) > 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
/*
Trong ví dụ trên, chúng ta định nghĩa một kiểu dữ liệu mới có tên là SortCallback để biểu diễn một hàm sắp xếp.
 Hàm này có hai tham số là a và b là hai phần tử của mảng và trả về một giá trị số nguyên.
 Nếu giá trị trả về lớn hơn 0, a sẽ được đưa lên trước b trong mảng kết quả.

Sau đó, chúng ta định nghĩa một hàm sortArray để sắp xếp một mảng bất kỳ sử dụng callback.
 Hàm này nhận vào một mảng và một callback, và trả về mảng đã được sắp xếp theo thứ tự đã được xác định bởi callback.
*/
// Bubble Sort
function bubbleSort(arr, sortCallback) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (sortCallback(arr[j], arr[j + 1]) > 0) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// Quick sort
/*
Thuật toán Quick Sort là một thuật toán sắp xếp đệ quy (recursive) dựa trên phương pháp chia để trị (divide and conquer).
 Thuật toán Quick Sort hoạt động như sau:

Chọn một phần tử làm "giá trị chốt" (pivot).
Chia dãy thành 2 phần, một phần chứa các phần tử nhỏ hơn hoặc bằng pivot, một phần chứa các phần tử lớn hơn pivot.
Để thực hiện việc này, ta duyệt từ đầu đến cuối dãy và so sánh từng phần tử với pivot. Nếu phần tử đó nhỏ hơn hoặc bằng pivot
, ta đẩy nó vào phần tử đầu tiên; ngược lại, ta đẩy nó vào phần tử cuối cùng.
Đệ quy sắp xếp phần dãy nhỏ hơn hoặc bằng pivot và phần dãy lớn hơn pivot.
Kết hợp các phần dãy đã sắp xếp.
Cụ thể hơn, ta có thể giải thích thuật toán Quick Sort bằng một ví dụ cụ thể:

Cho dãy số sau: 5 3 8 6 2 7 1 4

Chọn pivot là số đầu tiên, tức 5.
Tách dãy thành 2 phần: các số nhỏ hơn hoặc bằng pivot (3 2 1 4) và các số lớn hơn pivot (8 6 7).
Đệ quy sắp xếp các phần dãy đã tách. Đối với phần dãy nhỏ hơn hoặc bằng pivot (3 2 1 4),
chọn pivot là số đầu tiên, tức 3, và tách dãy thành các số nhỏ hơn hoặc bằng pivot (2 1) và các số lớn hơn pivot (4).
 Tiếp tục đệ quy sắp xếp các phần dãy này. Khi ta đến được đến các phần dãy chỉ còn một phần tử thì ta coi các phần tử đó đã được sắp xếp.
Kết hợp các phần dãy đã sắp xếp. Các phần dãy sắp xếp được kết hợp như sau: các số nhỏ hơn hoặc bằng pivot (2 1 3 4) + pivot (5) + các số lớn hơn pivot (8 6 7).
 Ta được dãy số đã sắp xếp: 1 2 3 4 5 6 7 8.

*/
function quickSort(arr, sortCallback) {
    var n = arr.length;
    if (n <= 1) {
        return arr;
    }
    var pivot = arr[Math.floor(n / 2)];
    console.log(pivot);
    var left = [];
    var right = [];
    for (var i = 0; i < n; i++) {
        if (i === Math.floor(n / 2)) {
            continue;
        }
        if (sortCallback(arr[i], pivot) <= 0) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left, sortCallback), true), [
        pivot
    ], false), quickSort(right, sortCallback), true);
}
var arr = [5, 3, 8, 1, 2, 9];
var sortedArr = sortArray(arr, function (a, b) { return a - b; });
var bubbledSort = bubbleSort(arr, function (a, b) { return a - b; });
var quickedSort = quickSort(arr, function (a, b) { return b - a; });
console.log(sortedArr); // [1, 2, 3, 5, 8, 9]
console.log(bubbledSort);
console.log(quickedSort);
