const user = {
    firstName: 'will',
    LastName: 'alexander',
    age: 33
    
};

const otherUser = {
    firstName: 'Sarah',
    
    age: -33
};
// error handling ==========
if (otherUser.firstName && otherUser.LastName){
    console.log(otherUser.firstName  + '' + otherUser.lastName);
} else {
    alert('User name incomplete!')
}

//===================
// try and catch error handling

const user = {
    firstName: 'will',
    LastName: 'alexander',
    age: 33
    
};

const otherUser = {
    firstName: 'Sarah',
    
    age: -33
};
try {
    console.log(otherUser.firstName  + '' + otherUser.lastName);
}
catch (error){
alert('an error occurred')
console.log(error)
}
