"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restDays = void 0;
var restDays = function (endDate) {
    var now = new Date();
    if (isNaN(endDate.getTime())) {
        throw new Error('La fecha de finalización no es válida');
    }
    ;
    var remainingDays = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return remainingDays > 0 ? remainingDays : 0;
};
exports.restDays = restDays;
