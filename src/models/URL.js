import pkg from 'mongoose';
const { Schema, model } = pkg;

const URLSchema = new Schema({
  url: String,
  code: String,
}, {
  versionKey: false,
},
);

export default model('URL', URLSchema);
