import mongoose, { Schema, Document } from 'mongoose';

// transoform to js

// export interface SignUpInterface extends Document {
//   email: string;
// }

// const SignUpSchema: Schema = new Schema({
//   email: { type: String, required: true }
// });

const SignUp = mongoose.model<SignUpInterface>('SignUp', SignUpSchema);
export default SignUp;