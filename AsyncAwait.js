const example = async () => {
    return 'hello there';
};

async function someFunc() {
    const result = await example();
    console.log(result); //hello there
    console.log('hello world'); //hello world
}

//console.log(example()) //Promise {}
//someFunc();

getUser('sussan')
    .then((user) => console.log(user))
    .catch(err => console.log(err));

getUser('sussans')
    .then((user) => console.log(user))
    .catch(err => console.log(err));

const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'susan' },
    { id: 3, name: 'anna' }
];

const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] }
];

const getData = async () => {
    try {
        const user = await getUser('john');
        if (user) {
            const articles = await getArticles(user.id);
            console.log(articles);
        }
    } catch (error) {
        console.log(error);
    }
};

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.name === name);
        if (user) {
            resolve(user);
        } else {
            reject(`No such user with name: ${name}`); // Fixed template literal syntax
        }
    });
}

function getArticles(userId) {
    return new Promise((resolve, reject) => {
        const userArticles = articles.find(article => article.userId === userId);
        if (userArticles) {
            resolve(userArticles.articles);
        } else {
            reject(`Wrong ID`);
        }
    });
} // Added missing closing parenthesis

// Call getData if needed
getData();