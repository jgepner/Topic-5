
//create an object contain my name and a password
let user = {username: 'Janice', password: '123'}
console.log(user.username)
console.log(user['username'])
console.log(user.password)
console.log(user['password'])

// need to use [ ] form for a variable
let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty]) //prints Janice

// use either method to change data in an object:
user.password = '456'
user['password'] = '789'
console.log(user)  // prints object with updated password

// add a new property
user.email = 'janice@gmail.com'
console.log(user)

// My turn: create a user object: name, email, pw, contact, roles
// then add: attribution for salary as a number, add "server admin" role
// and add office location to the contact object
let dream = {
    name: 'Janice',
    email: 'janice@gmail.com',
    password: '123',
    roles: ['student', 'tutor'],
    contact: {
        phone: '123-456-7890',
        office: 'T.2000',
    }
}
dream.salary = 100000
dream.roles.push('server admin')  // use push to add to an array
dream.contact.location = 'Minneapolis'
console.log(dream)

console.log('from Video 8:')
// from the end of Video 8:  to loop over an object:
for (let name in user) {  // name is the property name
    console.log(name, user[name])  // [name] because it's a string
}



