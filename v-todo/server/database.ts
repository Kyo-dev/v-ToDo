import {connect} from 'mongoose';

export const startConnection =async () => {
    try {
        const db = await connect('mongodb+srv://kyo:Pass117@cluster0.blwpf.mongodb.net/Cluster0?retryWrites=true&w=majority');
        console.log(db.connection.name)
    } catch (error) {
        console.error(error)
    }
};