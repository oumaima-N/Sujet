// lorsque user faire une demande
const mongoose = require('mongoose');

const demandeSchema = new mongoose.Schema({
    utilisateur:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    offre:
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Offer', 
        required: true
    },
    statut: { 
        type: String, 
        enum: ['En attente', 'Acceptée', 'Refusée'], 
        default: 'En attente' 
    },
    dateSoumission: { 
        type: Date, 
        default: Date.now 
    },
    
});

const Demande = mongoose.model('Demande', demandeSchema);

module.exports = Demande;