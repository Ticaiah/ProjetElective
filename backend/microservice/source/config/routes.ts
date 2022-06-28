// lib/config/routes.ts
import {Express}            from "express";
import {OrdersController}   from '../controllers/orders.controller';
import {ArticlesController}   from '../controllers/articles.controller';
import {AddressesController}   from '../controllers/addresses.controller';
import {MenusController}   from '../controllers/menus.controller';
import {RestaurantsController}   from '../controllers/restaurants.controller';

export class Routes {
  public ordersController: OrdersController;
  public restaurantsController: RestaurantsController;
  public articlesController: ArticlesController;
  public addressesController: AddressesController;
  public menusController: MenusController;

  constructor(){
    this.ordersController = new OrdersController();
    this.articlesController = new ArticlesController();
    this.restaurantsController = new RestaurantsController();
    this.addressesController = new AddressesController();
    this.menusController = new MenusController();
  }

  public routes(app:Express): void {

//Routes orders
    app.route('/orders')
      .get(this.ordersController.getAllOrders)
      .post(this.ordersController.addOrder);
    app.route('/orders/:_id')
      .get(this.ordersController.getOrder)
      .put(this.ordersController.updateOrder)
      .delete(this.ordersController.deleteOrder);


//Routes articles
    app.route('/articles')
      .get(this.articlesController.getAllArticles)
      .post(this.articlesController.addArticle);
    app.route('/articles/:_id')
      .get(this.articlesController.getArticle)
      .put(this.articlesController.updateArticle)
      .delete(this.articlesController.deleteArticle);

//Routes addresses
      app.route('/addresses')
        .get(this.addressesController.getAllAddresses)
        .post(this.addressesController.addAddress);
      app.route('/addresses/:_id')
        .get(this.addressesController.getAddress)
        .put(this.addressesController.updateAddress)
        .delete(this.addressesController.deleteAddress);

//Routes menus
      app.route('/menus')
        .get(this.menusController.getAllMenus)
        .post(this.menusController.addMenu);
      app.route('/menus/:_id')
        .get(this.menusController.getMenu)
        .put(this.menusController.updateMenu)
        .delete(this.menusController.deleteMenu);

//Routes restaurants Restaurant
      app.route('/restaurants')
        .get(this.restaurantsController.getAllRestaurants)
        .post(this.restaurantsController.addRestaurant);
      app.route('/restaurants/:_id')
        .get(this.restaurantsController.getRestaurant)
        .put(this.restaurantsController.updateRestaurant)
        .delete(this.restaurantsController.deleteRestaurant);

  }
}