(function () {
   "use strict";

   angular
      .module("ShoppingListCheckOff", [])
      .controller("ToBuyController", ToBuyController)
      .controller("AlreadyBoughtController", AlreadyBoughtController)
      .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

   ToBuyController.$inject = ["ShoppingListCheckOffService"];
   function ToBuyController(ShoppingListCheckOffService) {

      var showItemToBuy = this;
      showItemToBuy.items = ShoppingListCheckOffService.getToBuyItems();
      showItemToBuy.checkingToBuyList = function (itemIndex) {
         ShoppingListCheckOffService.checkingToBuyList(itemIndex);
      };
   };

   function AlreadyBoughtController(ShoppingListCheckOffService) {

      var boughtItems = this;
      boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
      console.log(boughtItems.items);
   }

   function ShoppingListCheckOffService() {
      var service = this;

      // List of shopping items
      var toBuyItems = [
         {
            name: "meat",
            quantity: "2 Kg of"
         },
         {
            name: "rice",
            quantity: "3 Kg of"
         },
         {
            name: "milk",
            quantity: "5 Lts of"
         },
         {
            name: "pasta",
            quantity: "5 Kg of"
         },
         {
            name: "Chicken",
            quantity: "5 Kg of"
         },
         {
            name: "chocolates",
            quantity: "Pack of 10"
         },
         {
            name: "Fruit Juice",
            quantity: "3 Bottles of"
         },
         {
            name: "Cola drink",
            quantity: "1 Bottle of"
         },
         {
            name: "Honey Mustard",
            quantity: "2 Bottles of"
         },
         {
            name: "Water",
            quantity: "10 Bottles of"
         }];

      // List of Bought Items
      var boughtItems = [];

      service.getToBuyItems = function () {
         return toBuyItems;
      };

      service.getBoughtItems = function () {
         return boughtItems;
      };

      service.checkingToBuyList = function (itemIndex) {
         boughtItems.push(toBuyItems[itemIndex]);
         toBuyItems.splice(itemIndex, 1);
      };
   };
})();
