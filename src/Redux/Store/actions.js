// import userService from "../../services/user.service";
// import picturesService from "../../services/pictures.service";

// export function setUser(user) {
//   return {
//     type: "SET_USER",
//     payload: user
//   };
// }
// export function fetchUser() {
//   return async dispatch => {
//     const user = await userService.getUser();
//     dispatch(setUser(user));
//   };
// }
// export function setPictures(pictures) {
//   return {
//     type: "SET_PICTURES",
//     payload: pictures
//   };
// }
// export function fetchPictures() {
//   return async dispatch => {
//     const pictures = await picturesService.getAllPictures();
//     dispatch(setPictures(pictures));
//   };
// }


function convertActionNameToType(actionName) {
  return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

export const actions = new Proxy(
  {}, //target
  {
    // prop="setCompanyName"
    // args=company_name="ex:"leader"
    get: function(target, prop) {
        // debugger;
      if (target[prop] === undefined)
        return function(args) {
          return {
            type: convertActionNameToType(prop), //SET_COMPANY_NAME
            payload: args
          }; ////     return {type:"SET_COMPANY_NAME",payload:company_name}
        };
      else return target[prop];
    }
  }
);