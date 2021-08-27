const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// LOGIN DE LA CLASSE et afficher les élèves rattachés à cette classe
const teacherSchema = Schema({
    teacher: String,
    classroom: String,
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
})

// LES NOMS ET LES NIVEAUX DE JEU
const gameSchema = Schema({
    name: String,
    levelMax: Number,
    created: {
        type: Date,
        default: Date.now
    }
})

// MODEL HISTORIQUE JEU PAR ENFANT
const historySchema = Schema({
    game_id: Object,
    level: Number,
    student: {
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    duration: Number,
    status: {
        type: String,
        enum: ['SUCCESS', 'FAILED', 'PARTIAL']
    },
    created: {
        type: Date,
        default: Date.now
    }
})

// MODEL PAR ENFANT + REF A SON HISTORIQUE
const studentSchema = Schema({
    name: String,
    created: {
        type: Date,
        default: Date.now
    }
})


const Teacher = mongoose.model("teacher", teacherSchema)
const Student = mongoose.model('student', studentSchema);
const Game = mongoose.model("game", gameSchema)
const History = mongoose.model("history", historySchema)


module.exports = { Teacher, Student, Game, History }