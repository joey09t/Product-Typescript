"use strict";
exports.__esModule = true;
var proall = [
    { proId: 1001, proName: "Maggi", proCost: 50 },
    { proId: 1002, proName: "Noodles", proCost: 70 },
    { proId: 1003, proName: "Sandwich", proCost: 80 }
];
// console.log(proall);
proall.push({ proId: 1004, proName: "Burger", proCost: 60 });
proall.splice(1, 1);
var pro = proall.filter(function (x) { return x.proId == 1003; });
console.log(pro);
for (var _i = 0, proall_1 = proall; _i < proall_1.length; _i++) {
    var data = proall_1[_i];
    console.log(data.proId + " " + data.proName + " " + data.proCost);
}
