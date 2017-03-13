module.exports = function (v1, operator, v2, opts) {
    var isTrue = false;
    switch (operator) {
        case '===':
            isTrue = v1 === v2;
            break;
        case '!==':
            isTrue = v1 !== v2;
            break;
        case '<':
            isTrue = v1 < v2;
            break;
        case '<=':
            isTrue = v1 <= v2;
            break;
        case '>':
            isTrue = v1 > v2;
            break;
        case '>=':
            isTrue = v1 >= v2;
            break;
        case '||':
            isTrue = v1 || v2;
            break;
        case '&&':
            isTrue = v1 && v2;
            break;
    }
    return isTrue ? opts.fn(this) : opts.inverse(this);
};
