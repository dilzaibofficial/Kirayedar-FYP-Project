const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  advance: {
    type: Number,
    required: true,
  },
  bachelor: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  assest: {
    type: Array,
    default: [],
  },
  bedroom: {
    type: Number,
    required: true,
  },

  bathroom: {
    type: Number,
    required: true,
  },

  areaofhouse: {
    type: Number,
    required: true,
  },

  peoplesharing: {
    type: Number,
    required: true,
  },
  propertyowner: {
    type: String,
    required: "true",
  },
  propertySelling: {
    agreement: {
      type: Boolean,
      default: false,
    },
    agreementMaker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
