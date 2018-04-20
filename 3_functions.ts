

function disp_details(id:number, name:string, mail_id?:string) {
    console.log('id:', id);
    console.log('nombre:', name);

    if(mail_id!=undefined)
        console.log('emailio ',mail_id);
    
    console.log('**********');

        
}

disp_details(123, 'mako');
disp_details(43,'tkt', 'mail@sa.net');


// REST PARAMETERS

function addNumbers(...nums:number[]){
    var i;
    var sum:number = 0;

    for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];
    }

    console.log('tu suma', sum)
}

addNumbers(1,2,3);
addNumbers(10,20,52,30,52,54,55)