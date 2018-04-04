var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  obj = object;
  obj[key] = value;
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  obj = object;
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
