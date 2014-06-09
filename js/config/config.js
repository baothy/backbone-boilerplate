define(['jquery'
], function (jquery) {

  var prod_env                 = false;

  var imgUrlBase               = 'imgs/assets/',
      baseUrl                  = 'http://localhost:2000/';

  var services = {
    getUsersLIst: baseUrl + 'getUsersList',
    getUser: baseUrl + ' getUser'
  };

  return {
    services: services,
  };

});
