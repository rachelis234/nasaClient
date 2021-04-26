// import { actions } from "../actions";
// import userService from "../../../services/user.service";
// import pictureService from "../../../services/pictures.service";

// export const middleware = ({ dispatch, getState }) => next => action => {
  // if (action.type === "GET_USER_FROM_DB") {debugger
  //   userService
  //     .getUser(action.payload)
  //     .then(users => {
  //       debugger;
  //       // console.log(users);
  //       dispatch(actions.setUser({ user: users.user, token: users.token }));
  //     })
  //     .then(() => {})
  //     .catch(() => actions.setUser({}));
  // } else if (action.type === "GET_PICTURE_OF_DAY_FROM_DB") {debugger
  //   pictureService
  //     .getPictureOfTheDay(action.payload)
  //     .then(picture => {console.log(picture)
  //       debugger;
  //       // debugger;
  //       // console.log(users);
  //       dispatch(actions.setPictureOfDay(picture));
  //     })
  //     .then(() => {})
  //     .catch(() => actions.setPictureOfDay(null));
  // }
//   return next(action);
// };

// export const getUserFromDb = ({ dispatch, getState }) => next => action => {
//   if (action.type === "GET_USER_FROM_DB") {
//     userService
//       .getUser(action.payload)
//       .then(users => {
//         debugger;
//         // console.log(users);
//         dispatch(actions.setUser({ user: users.user, token: users.token }));
//       })
//       .then(() => {})
//       .catch(() => actions.setUser({}));
//   }
//   return next(action);
// };

// export const getPictureOfDayFromDb = ({
//   dispatch,
//   getState
// }) => next => action => {
//   debugger;
//   if (action.type === "GET_PICTURE_OF_DAY_FROM_DB") {
//     pictureService
//       .getPictureOfTheDay(action.payload)
//       .then(picture => {
//         debugger;
//         // debugger;
//         // console.log(users);
//         dispatch(actions.setPictureOfDay(picture));
//       })
//       .then(() => {})
//       .catch(() => actions.setPictureOfDay(null));
//   }
//   return next(action);
// };
