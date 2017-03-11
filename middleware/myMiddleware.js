module.exports = function(options){
  return (request, response, next) => {
    if(options.option1 === "1"){
      console.log("In option1: ", options.option1);
    }
    next();
  };
};
