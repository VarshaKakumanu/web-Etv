import { articels } from "./constant";

export const articelsData = (data: {}, action: any) => {
  //    if(action.type === articels){
  //     console.warn(articels,":",action)

  //     return data
  //    }else{
  //     return "no action called"
  //    }
  switch (action.type) {
    case articels:
      return 1 + 1;
    //   case removeArticel :
    //     return  null;
    default:
      return "no data ";
  }
};
