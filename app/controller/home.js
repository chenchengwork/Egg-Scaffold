'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async getTimeRecord(){
    const { ctx } = this;

    ctx.status = 200;

    ctx.body = {
      code: "success",
      msg: "success",
      data: new Array(1).fill(0).map((_, index) => ({
        "name": "小明"+index,
        "address": "北京",
        // "img": "",
        "img": "http://170.16.0.21:8000/public/img/meinv.jpeg"
      }))
    };


  }
}

module.exports = HomeController;
