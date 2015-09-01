function (user, context, callback) {
  // add roles to user info
  user.roles = ["worker"];
  
  // add scope for JWT request so the roles is returned in the token
  var scopeMapping = {
    roles: ["roles"]
  };
  context.jwtConfiguration.scopes = scopeMapping;  
  callback(null, user, context);
}
