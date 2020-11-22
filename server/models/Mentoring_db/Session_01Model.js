import Session_01ModelGenerated from "./generated/Session_01ModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Session_01ModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Session_01ModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Session_01ModelGenerated,
  ...customModel
};
