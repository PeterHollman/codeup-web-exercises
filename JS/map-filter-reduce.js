const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter(function(user){
   return user.languages.length > 2;
});

console.log(threeLanguages);

const emailAddress = users.map(function (user) {
   return user.email;
});

console.log(emailAddress);


const totalYears = users.reduce(function(total, current){
    const currentTotal = current.yearsOfExperience;
    return total + currentTotal / users.length;
},0);

console.log(totalYears);

const longestEmail = users.reduce(function(previous,current){
    const currentEmail = current.email;
    if(currentEmail.length > previous.length){
        return currentEmail;
    }else{
        return previous;
    }
},"");

console.log(longestEmail);


const theInstructors = users.reduce(function(accumulation, current){
   const theNames = current.name + ",";
   return accumulation + theNames;
},"");

console.log("Your instructors are " + theInstructors + ".");


//bonus

const allTheLanguages = users.reduce(function(total, current){
   current.languages.map(function (language) {
       total.push(language);
   });
   return total;
},[]);

const filteredLanguages = new Set(allTheLanguages);
console.log(filteredLanguages);

