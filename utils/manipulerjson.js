const fs = require("fs");

function afficherPlusieursPartie(stringPerso) {
  if (stringPerso.length <= 2000) {
    return [stringPerso];
  } else {
    let perso1stPart = stringPerso.substring(0, 1997);
    const perso1stPartSplitBackSlash = perso1stPart.split("\n");
    const beforeBackSlash =
      perso1stPartSplitBackSlash[perso1stPartSplitBackSlash.length - 1];
    perso1stPart = perso1stPart.substring(
      0,
      perso1stPart.length - beforeBackSlash.length,
    );
    let perso2stPart = stringPerso.substring(1997);

    perso2stPart = beforeBackSlash + perso2stPart;

    return [perso1stPart].concat(afficherPlusieursPartie(perso2stPart));
  }
}


module.exports.afficherPlusieursPartie = afficherPlusieursPartie;
