const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '6c680901853acf8818e7aea4111';

User.findById('5c642e69fa4c24e43120e260').then(
	user => {
		if (!user) {
			return console.log('Unable to find user');
		}
		console.log(JSON.stringify(user, undefined, 2));
	},
	e => {
		console.log('Error', e);
	}
);

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then(todos => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then(todo => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id)
// 	.then(todo => {
// 		if (!todo) {
// 			return console.log('Id not found');
// 		}
// 		console.log('Todo By Id', todo);
// 	})
// 	.catch(e => console.log(e));
