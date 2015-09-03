pouchdb-getting-started-todo (Using auth0 and couch_jwt_auth)
============================

The source repository for the getting started tutorial for PouchDB

This sample is modified to support Auth0 login and CouchDB [couch_jwt_auth plugin](https://github.com/softapalvelin/couch_jwt_auth). Auth0 login generates JSON Web Token and then the token is added to all requests to CouchDB. couch_jwt_auth validates the token and creates a CouchDB user context for the user if the token is valid. There's no need to add the user to CouchDB users database. Read [this wiki page](https://github.com/softapalvelin/getting-started-todo/wiki/How-JWT-authentication-with-CouchDB-works%3F) for details how the authentication works. If you want to know what changes are needed to get application working with Auth0 then take a look at [the changes](https://github.com/softapalvelin/getting-started-todo/commit/5f8d2db9bba73e033a8e3b63a52b9dea06d91554) that I made to original "getting-started-todo"-project.

This sample requires that you have added a Auth0 rule that adds 'roles' claim to the token. The roles claim is used by couch_jwt_auth to add roles to CouchDB user context. Sample code for the rule can be found from the [auth0-rule-sample.js](https://github.com/softapalvelin/getting-started-todo/blob/master/auth0-rule-sample.js). Now you can use roles to restrict access to "todos" database to only users with the role "worker".

You must configure CouchDB to use couch_jwt_auth for authentication. Add {couch_jwt_auth, jwt_authentication_handler} to httpd > authentication_handlers configuration. Then configure couch_jwt_auth with the correct information from Auth0. Look [couchdb-sample-local.ini](https://github.com/softapalvelin/getting-started-todo/blob/master/couchdb-sample-local.ini) for sample configuration.

Note: The sample uses Auth0 Popup Mode. It may require some extra configuration in Auth0 console. For example, authentication with Google requires that you obtain Google ClientID and configure it in the [connections menu](https://manage.auth0.com/#/connections/social).
