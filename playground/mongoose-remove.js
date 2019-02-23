const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
// 	console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5c71a4b1595e640d87ca8097').then(todo => {
// 	console.log(todo);
// });

Todo.findOneAndRemove({ _id: '5c71a4b1595e640d87ca8097' }).then(todo => {});
