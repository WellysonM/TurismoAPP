const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
var SchemaTypes = mongoose.Schema.Types;

const TourismSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  touristSpot: {
    type: String,
    required: true,
  },
  TravelDate:{
    type: String,
    required: true,
  },
  distanceKM: {
    type: SchemaTypes.Number,
    required: true,
  },
  spent: {
    type: SchemaTypes.Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

TourismSchema.plugin(mongoosePaginate);

mongoose.model('Tourism', TourismSchema);