const add = (sum1, sum2) =>{
    const result = sum1 + sum2;
    return result;
}
// let firstResult = add(4, 3);
// console.log(firstResult)
       // or log it directly to the console

console.log(add(4, 3));

//=========================

const calculateAveragingRating = (ratings) =>{
    if (ratings.length ===0) {
        return 0;
    }
    let sum = 0;
    for (let rating of ratings){
        sum += rating;
    }
    const result = sum/ratings.length;
    return result;
}
export {calculateAveragingRating};
//=========== Using function =========

const firstUser = {
    name: 'Will Alexander',
    online: true,
    accountType: 'normal'
};

const secondUser = {
    name: 'Sarah Kate',
    online: true,
    accountType: 'premium'
};

const thirdUser = {
    name: 'Audrey Simon',
    online: true,
    accountType: 'premium'
};

const sendWelcomeMessage = (user) =>{
    if (user.online){
        if (user.accountType === 'normal'){
            console.log('Hello' + user.name + '!') 

            
        } else {
            console.log('Welcome back premium user' + user.name + '!')
        }
    }
}
sendWelcomeMessage(firstUser);
sendWelcomeMessage(secondUser);
sendWelcomeMessage(thirdUser);