import CourseMaterialsModelGenerated from "./generated/CourseMaterialsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CourseMaterialsModelGenerated.init();
  
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
      return await CourseMaterialsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CourseMaterialsModelGenerated,
  ...customModel
};
