const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) =>{
  try {
    const arrEmosi = (await promiseTheaterIXX()).concat((await promiseTheaterVGC()));
    return arrEmosi.filter(Element=>(Element.hasil === emosi)).length;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  promiseOutput,
};
