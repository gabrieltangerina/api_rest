class HomeController {
  async index(req, res) {
    res.json('index Home');
  }
}

export default new HomeController();
