/*
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.6
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  }
  // else {
  //   // Browser globals (root is window)
  //   factory(root.expect, root.SwaggerPetstore);
  // }
}(this, function(expect, SwaggerPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerPetstore.UserApi();
  });

  describe('(package)', function() {
    describe('UserApi', function() {
      describe('createUser', function() {
        it('should call createUser successfully', function(done) {
          // TODO: uncomment, update parameter values for createUser call
          /*

          instance.createUser(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createUsersWithArrayInput', function() {
        it('should call createUsersWithArrayInput successfully', function(done) {
          // TODO: uncomment, update parameter values for createUsersWithArrayInput call
          /*

          instance.createUsersWithArrayInput(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createUsersWithListInput', function() {
        it('should call createUsersWithListInput successfully', function(done) {
          // TODO: uncomment, update parameter values for createUsersWithListInput call
          /*

          instance.createUsersWithListInput(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteUser', function() {
        it('should call deleteUser successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteUser call
          /*

          instance.deleteUser(username, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUserByName', function() {
        it('should call getUserByName successfully', function(done) {
          // TODO: uncomment, update parameter values for getUserByName call and complete the assertions
          /*

          instance.getUserByName(username, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstore.User);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('loginUser', function() {
        it('should call loginUser successfully', function(done) {
          // TODO: uncomment, update parameter values for loginUser call and complete the assertions
          /*

          instance.loginUser(username, password, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(&#x27;string&#x27;);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('logoutUser', function() {
        it('should call logoutUser successfully', function(done) {
          // TODO: uncomment logoutUser call
          /*

          instance.logoutUser(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateUser', function() {
        it('should call updateUser successfully', function(done) {
          // TODO: uncomment, update parameter values for updateUser call
          /*

          instance.updateUser(body, username, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));