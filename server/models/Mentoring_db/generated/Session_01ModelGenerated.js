/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE session_01ModelGenerated.js PLEASE EDIT ../session_01Model.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Mentoring_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * session_01
      */
    const session_01Schema = new mongoose.Schema({
      Duration: {
        type: "Date", 
        required: true
      },
      Goal: {
        type: "String", 
        required: true
      },
      Instructor: {
        type: "String", 
        required: true
      },
      Title: {
        type: "String", 
        required: true
      },
      task: {
        type: "Number", 
        required: true
      },
      // RELATIONS
      _course: {
        type: Schema.ObjectId,
        ref: "course"
      },
      _courseMaterials: {
        type: Schema.ObjectId,
        ref: "courseMaterials"
      },
      
      
      // EXTERNAL RELATIONS
      /*
      _session_01: [{
        type: Schema.ObjectId,
        ref: "courseMaterials"
      }],
      */
    });

    generatedModel.setModel(db.connection.model("Session_01", session_01Schema));

    return session_01Schema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS




};

export default generatedModel;
