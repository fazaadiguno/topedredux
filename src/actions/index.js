export const add = obj => {
  return {
    type: "ADD",
    payload: obj
  };
};

export const release = str => {
  return {
    type: "RELEASE",
    payload: str
  };
};
