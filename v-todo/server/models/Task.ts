import {Schema, model} from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
    created: {
		type: Date,
		default: () => Date.now(),
		required: true
    }
})

export default model('Task', taskSchema);
// mongodb+srv://main_user:Pass0123@cluster0.blwpf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority