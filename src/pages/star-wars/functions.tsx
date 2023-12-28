
const getPlanetIdFromURL = (url:string):number => {
  return Number(url.slice(url.indexOf('planets/') + 8,-1))
}

export {
  getPlanetIdFromURL,
}