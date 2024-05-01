// Comments
// هذا تعليق يوضح وظيفة الكود التالي

// Popup Alert/Boxes
alert("مرحباً! هذه نافذة تنبيه.");

// Navigator
const browserName = navigator.appName;
console.log("اسم المتصفح: " + browserName);

// DOM Elements
const headerElement = document.querySelector('header');
console.log("عنصر الرأس: ", headerElement);

// DOM Methods
const dataListOptions = document.querySelectorAll('#search option');
console.log("عدد الخيارات في القائمة المنسدلة:", dataListOptions.length);

// DOM Events
document.querySelector('input[name="search"]').addEventListener('focus', function() {
    console.log("تم التركيز على حقل البحث.");
});

// Output
console.log("هذه رسالة تظهر في وحدة تحكم المتصفح.");

// Syntax
const x = 5;
const y = 10;
const z = x + y;
console.log("مجموع x و y يساوي: " + z);

// Statements
if (x > y) {
    console.log("x أكبر من y.");
} else {
    console.log("x أصغر من أو يساوي y.");
}
