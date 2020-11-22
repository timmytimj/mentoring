import Session_01ControllerGenerated from "./generated/Session_01ControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import Session_01Model from "../../models/Mentoring_db/Session_01Model";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/session_01`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     Session_01ControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await Session_01Model.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...Session_01ControllerGenerated,
  ...customControllers
};

