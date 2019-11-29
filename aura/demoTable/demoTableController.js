({
  init: function(component, event, helper) {
    let columnsPromise = helper.getColumnsHelper(component, event, helper);
      
      columnsPromise
        .then((s) => {console.log(s); return  helper.getProductsListHelper(component, event, helper)})
        .then( (v)=>  console.log('third then: '+v))
        .catch(err=>console.log(err));
   
  },

  handleSelectedProducts: function(component, event, helper) {
    console.log("--->>> inside handleSelectedProducts");
    let table = component.find("dataTableObject");

    let selectedRows = table.getSelectedRows();

    console.log(selectedRows);
  },

  cancel: function(component, event, helper) {
    $A.get("e.force:closeQuickAction").fire();
  },

  handleRowAction: function(component, event, helper) {}

  /*
  init: function(component, event, helper) {
     
      let columnsPromise = helper.getColumnsHelper(component, event, helper);
      
      columnsPromise
        .then(() => helper.getProductsListHelper(component, event, helper))
        .then( (v)=>  console.log('third then: '+v))
        .catch(err=>console.log(err));
  
  
    },*/
});
