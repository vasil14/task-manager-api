const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  // useNewUrlParse: true,
  // useCreateIndex: true,
});

// const me = new User({
//   name: '   Vasil    ',
//   email: 'MYEMAIL@MEAD.IO',
//   passwor: 'pa14'
// });

// me.save().then((me)=>{
//   console.log(me)
// }).catch((error)=>{
//   console.log('Error', error);
// })

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const task = new Task({
//   description: '  Eat lunch',

// })

// task.save().then(()=>{
//   console.log(task);
// }).catch((error)=>{
//   console.log('Error!', error);
// })
