const firstUser = {
    name: 'will alexander',
    age: '33',
    accountLevel: 'normal'

};

const secondUser = {
    name: 'Sarah Kate',
    age: '21',
    accountLevel: 'premium' 
};

const thirdUser = {
    name: 'Audrey Dam',
    age: '27',
    accountLevel: 'mega-premium'
};

switch (firstUser.accountLevel){
    case 'normal':
        console.log('Normal account');
        break;
        case 'premium':
            console.log('premium account');
            break;
            case 'mega-premium':
                console.log('mega premium account');
                break;
                default:
                    console.log('unknown account type');


}