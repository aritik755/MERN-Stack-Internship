const user = {
  id: 1,
  profile: {
    firstName: "John",
    lastName: "Doe"
  }
};
 
// Extract firstName and lastName.
 
let{firstName , lastName} = user.profile;
console.log(firstName);
console.log(lastName);

// let { profile: { firstName, lastName } } = user;
// console.log(firstName, lastName);