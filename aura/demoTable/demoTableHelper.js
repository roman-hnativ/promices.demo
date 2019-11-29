({
   /* getColumnsHelper: function(component, event, helper) {
    var action = component.get("c.getColums");
    action.setCallback(
      this,
      $A.getCallback(function(response) {
        if (response.getState() == "SUCCESS") {
          var prods = JSON.parse(response.getReturnValue());

          component.set("v.productColumns", prods);

          helper.getProductsListHelper(component, event, helper);
        } else {
          console.log("Response state: " + response.getState());
        }
      })
    );
    $A.enqueueAction(action);
  },



  getProductsListHelper: function(component, event, helper) {
    var productsListDataAction = component.get("c.getData");
    productsListDataAction.setCallback(
      this,
      $A.getCallback(function(response) {
        if (response.getState() == "SUCCESS") {
          var prods = JSON.parse(response.getReturnValue());

          component.set("v.products", prods);
        } else {
          console.log("Response state: " + response.getState());
        }
      })
    );
    $A.enqueueAction(productsListDataAction);
  },*/

  addBuildingOptionsHelper: function(component, event, selectedIDs) {
    var addBuildingOptionsAction = component.get("c.addBuildingOptions");
    addBuildingOptionsAction.setParams({
      parentId: component.get("v.recordId"),
      selectedProductIDs: selectedIDs
    });
    addBuildingOptionsAction.setCallback(this, function(response) {
      var state = response.getState();
      if (response.getState() == "SUCCESS") {
        $A.get("e.force:closeQuickAction").fire();
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
          title: "Success!",
          message: "The Building Options has been added successfully.",
          type: "success"
        });
        toastEvent.fire();
        $A.get("e.force:refreshView").fire();
      }
    });
    $A.enqueueAction(addBuildingOptionsAction);
  },

  
  
  getProductsListHelper: function(component, event, helper) {
    var productsListDataAction = component.get("c.getData");
   
    let self = this;
    let productPromise = new Promise((resolve, reject) => {
      productsListDataAction.setCallback(
        self,
        $A.getCallback(function(response) {
          if (response.getState() == "SUCCESS") {
            var prods = JSON.parse(response.getReturnValue());
            component.set("v.products", prods);
            resolve('getProductsListHelper');
          } else {
            reject(response.getState());
          }
        })
      );
    });
    $A.enqueueAction(productsListDataAction);   
    
    return productPromise;
  },

  getColumnsHelper: function(component, event, helper) {
    var action = component.get("c.getColums");
  
    let self = this;
    let _promise = new Promise((resolve, reject) => {
      action.setCallback(
        self,
        $A.getCallback(function(response) {
          if (response.getState() == "SUCCESS") {
            var prods = JSON.parse(response.getReturnValue());
            component.set("v.productColumns", prods);
            resolve('getColumnsHelper');
          } else {
            reject(response.getState());
          }
        })
      );
    });
    $A.enqueueAction(action);   
    
    return _promise;
  },
  
  
});
