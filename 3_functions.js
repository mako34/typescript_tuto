function disp_details(id, name, mail_id) {
    console.log('id:', id);
    console.log('nombre:', name);
    if (mail_id != undefined)
        console.log('emailio ', mail_id);
    console.log('**********');
}
disp_details(123, 'mako');
disp_details(43, 'tkt', 'mail@sa.net');
// REST PARAMETERS
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log('tu suma', sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 20, 52, 30, 52, 54, 55);
