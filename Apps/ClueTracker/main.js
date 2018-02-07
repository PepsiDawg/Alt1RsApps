function start() {
  a1lib.identifyUrl("appconfig.json");
}

function getTrailImg() {
return new Promise(function(resolve, reject) {
  ImageData.fromBase64(
    function(i){resolve(i);},
    "iVBORw0KGgoAAAANSUhEUgAAAC4AAAAQCAYAAABpyU3qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQySURBVEhLXZXNi1xFFMXfdL/+fN39uqe7zWQIjjJjxoAkRBIyxm8JgiaLCaIuApGMIkSRgGDEjzBZBNSFuFATMwYXIiiKMGLARUhEcZVR/ANEsjO7SPQPuL7frZxnTS9uV9U9p06dulX1Ojm8bdYOzo7tyfHInp6/3RjTHoraA7O3eZ5Q/rHR0PvMpWVMX1w4jIVrbqwBl76CHAFHevTxFvPIJ/xAlnH1RWIiHITAJKaAA8YcjNDC0Rwi1qKN8bgoCq0T+5KO8ARAC5DUwiIJv3847X1aGYw5zFFfZpSb5GktDExicas8rfgaJ9oJhmgBJEYLHu885hDaCJhMkSenPlrS12bA4AhnrLXIEfQVjKVHeMVl6oGtodIygqAwjVUNRISTUzAWTwvRYpyWAJMBQvPUwtEYHD3mS5Nw479fyOz69w27frFptlHzYPxXEfQ/e6nr5PVTg//xgvvPj3X74Uxmz9wZxAiJs3mC8Tdv5PbWEwPPyyzrkkfr30Ln7eWeG/zyZKfMfXAs36Sr0yUSfj4sCP1azdrVql0+m/rEJEl8vLVftRcPV2wxy7zqYJc+Th1/+anAfef5hj0+Eyo0Wdlnt4/cxC+f1O3eYd81hBPSq01N2e5e102VuUrF7u5knpOuNu13nM6OftfB39ZapXEwcg/PjB3fMwgVQnTUaGxaeKHXKc0oML52vOMnA+/RnfUSU+U0f7ooHKbAylwj8OFJT/PdOIaUiI0zAUyChEQxTp7x689VinG9NBMvwHU7+lDQPP9m1fb2gx6c2Djz4cc5NsOYvDQpJH03zkBx9Xy45xhnLDGCcSlaLPTRSjghuPNZ23EtRP/Egdz++KplzWrFrt4qyF2jeqmLgdikChivIW4crJEAICDCxtpm49rp/n7PWzDi2nehXT3S9kXBqGRcoY0LLbt5pW7X1sNjg8/pLG0J33rpYZI3xpg1leNU40LQ542wjldcABEb39/L3QAThEsU/Nt3w+PkKqABjznwjtwzsJuF2blBeGSt4qHfuFKzP9dTPx1xJ40TylEQPtHKqzCEV5wkx0TExpUDl/lYdHn72H46V7Mbl2v2wiPh9WOGOV+8ltml91uWFl+LfdMDxy6eCZ+6g0tpqVnqTdzxXz8Pm+Gkjz849GuJrjay6arwLdUXgIe0shRMgzHh01d6jmH09Ep4jIcWRrb+Xrg2X682fTNnb31Jfj5Xt4VhuKcE32V4VP3V5Y7zpLd6LHUfyhF/Fyek/5Kj9+W2kIcvH+smOlp2Q7vY7XiVqPi4qMKuvOd5jNPe0c0cgzPXbnt+d1GVLa2G52eaDf98gtUqU5anaXmnifni/wAeD3Yxa9lco1nqbWs1nbOjWJOc8u206n28cF3wkciwNkDoSDQmVHmEwTSPUB8OEWPoai55YeS5BrRowqHVvFhjMrdnkNt/SCCtlid+xoAAAAAASUVORK5CYII=");  
  });
}

function recordData() {
  getTrailImg().then(function(result) {
    this.pos = null;
    this.found = find(result);
    if(this.found) {
      console.log(this.pos);
      read();
    } else {
      console.log("Could not find Treasure Trails reward screen");
    }
  });
}

function find(toFind) {
  let img = a1lib.bindfullrs();

  var poslist = a1lib.findsubimg(img, toFind);
  if(poslist.length > 0) {
    this.pos = poslist[0];
    return true;
  } else {
    return false;
  }
}

function read() {
  let img = a1lib.bindfullrs();

  let buffer = img.toData(this.pos.x,this.pos.y, 300, 200);
  console.log(buffer);
}


//https://pastebin.com/2SMjSLfs
//legacy code from dgkey turns out to read this font.
//here be dragons! stay away
function readDgfontString(buf, x, y, maxwidth, colors) {
  var coldiffat = function (buf, x, y, r, g, b) {
      var w = buf.width;
      var i = x * 4 + y * w * 4;
      return Math.max(Math.abs(r - buf.data[i]), Math.abs(g - buf.data[i + 1]), Math.abs(b - buf.data[i + 2]));
  }
  var readplayerchar = function (buf, x, y, r, g, b) {
      if (coldiffat(buf, x + 0, y - 7, r, g, b) < 3) {
          if (coldiffat(buf, x + 1, y - 7, r, g, b) < 3) {
              if (coldiffat(buf, x - 1, y - 6, r, g, b) < 3) {
                  if (coldiffat(buf, x + 2, y - 7, r, g, b) < 3) {
                      if (coldiffat(buf, x + 3, y - 5, r, g, b) < 3) {
                          if (coldiffat(buf, x + 1, y - 2, r, g, b) < 3) {
                              return { chr: 'Q', cw: 7, ds: -2, de: 5 };
                          }
                          else {
                              if (coldiffat(buf, x - 1, y - 4, r, g, b) < 3) {
                                  return { chr: 'O', cw: 7, ds: -2, de: 5 };
                              }
                              else {
                                  return { chr: '8', cw: 7, ds: -2, de: 5 };
                              }
                          }
                      }
                      else {
                          if (coldiffat(buf, x - 1, y - 7, r, g, b) < 3) {
                              return { chr: '5', cw: 6, ds: -2, de: 4 };
                          }
                          else {
                              return { chr: 'S', cw: 7, ds: -2, de: 5 };
                          }
                      }
                  }
                  else {
                      if (coldiffat(buf, x + 1, y - 3, r, g, b) < 3) {
                          return { chr: 'G', cw: 7, ds: -3, de: 4 };
                      }
                      else {
                          if (coldiffat(buf, x - 2, y - 5, r, g, b) < 3) {
                              return { chr: 'C', cw: 7, ds: -3, de: 4 };
                          }
                          else {
                              return { chr: '3', cw: 6, ds: -2, de: 4 };
                          }
                      }
                  }
              }
              else {
                  if (coldiffat(buf, x + 1, y - 4, r, g, b) < 3) {
                      if (coldiffat(buf, x + 3, y - 4, r, g, b) < 3) {
                          if (coldiffat(buf, x + 2, y - 3, r, g, b) < 3) {
                              return { chr: 'R', cw: 7, ds: -1, de: 6 };
                          }
                          else {
                              return { chr: 'B', cw: 7, ds: -1, de: 6 };
                          }
                      }
                      else {
                          if (coldiffat(buf, x + 1, y + 0, r, g, b) < 3) {
                              return { chr: 'E', cw: 5, ds: -1, de: 4 };
                          }
                          else {
                              return { chr: 'F', cw: 5, ds: -1, de: 4 };
                          }
                      }
                  }
                  else {
                      if (coldiffat(buf, x - 1, y - 7, r, g, b) < 3) {
                          if (coldiffat(buf, x + 3, y - 7, r, g, b) < 3) {
                              return { chr: 'J', cw: 6, ds: -2, de: 4 };
                          }
                          else {
                              return { chr: 'T', cw: 5, ds: -2, de: 3 };
                          }
                      }
                      else {
                          if (coldiffat(buf, x + 0, y - 6, r, g, b) < 3) {
                              if (coldiffat(buf, x + 3, y - 7, r, g, b) < 3) {
                                  return { chr: 'P', cw: 7, ds: -1, de: 6 };
                              }
                              else {
                                  return { chr: 'D', cw: 7, ds: -1, de: 6 };
                              }
                          }
                          else {
                              if (coldiffat(buf, x + 3, y - 6, r, g, b) < 3) {
                                  return { chr: '7', cw: 6, ds: -1, de: 5 };
                              }
                              else {
                                  return { chr: 'Z', cw: 7, ds: -1, de: 6 };
                              }
                          }
                      }
                  }
              }
          }
          else {
              if (coldiffat(buf, x + 1, y - 4, r, g, b) < 3) {
                  if (coldiffat(buf, x + 3, y - 3, r, g, b) < 3) {
                      if (coldiffat(buf, x + 1, y + 0, r, g, b) < 3) {
                          return { chr: 'b', cw: 6, ds: -1, de: 5 };
                      }
                      else {
                          return { chr: 'h', cw: 6, ds: -1, de: 5 };
                      }
                  }
                  else {
                      if (coldiffat(buf, x + 3, y - 6, r, g, b) < 3) {
                          return { chr: 'K', cw: 6, ds: -1, de: 5 };
                      }
                      else {
                          return { chr: 'H', cw: 7, ds: -1, de: 6 };
                      }
                  }
              }
              else {
                  if (coldiffat(buf, x + 2, y - 4, r, g, b) < 3) {
                      if (coldiffat(buf, x + 1, y - 6, r, g, b) < 3) {
                          if (coldiffat(buf, x - 1, y - 6, r, g, b) < 3) {
                              return { chr: '0', cw: 7, ds: -3, de: 4 };
                          }
                          else {
                              return { chr: 'N', cw: 7, ds: -1, de: 6 };
                          }
                      }
                      else {
                          if (coldiffat(buf, x + 0, y - 5, r, g, b) < 3) {
                              return { chr: 'k', cw: 5, ds: -1, de: 4 };
                          }
                          else {
                              return { chr: 'X', cw: 7, ds: -1, de: 6 };
                          }
                      }
                  }
                  else {
                      if (coldiffat(buf, x + 1, y + 0, r, g, b) < 3) {
                          return { chr: 'L', cw: 5, ds: -1, de: 4 };
                      }
                      else {
                          if (coldiffat(buf, x + 1, y - 6, r, g, b) < 3) {
                              return { chr: 'M', cw: 8, ds: -1, de: 7 };
                          }
                          else {
                              return { chr: 'l', cw: 3, ds: -1, de: 2 };
                          }
                      }
                  }
              }
          }
      }
      else {
          if (coldiffat(buf, x + 1, y - 4, r, g, b) < 3) {
              if (coldiffat(buf, x + 2, y - 3, r, g, b) < 3) {
                  if (coldiffat(buf, x + 2, y - 8, r, g, b) < 3) {
                      return { chr: 'd', cw: 6, ds: -2, de: 4 };
                  }
                  else {
                      if (coldiffat(buf, x - 1, y - 2, r, g, b) < 3) {
                          if (coldiffat(buf, x + 0, y - 2, r, g, b) < 3) {
                              return { chr: 'e', cw: 6, ds: -2, de: 4 };
                          }
                          else {
                              if (coldiffat(buf, x + 2, y + 0, r, g, b) < 3) {
                                  if (coldiffat(buf, x - 1, y + 2, r, g, b) < 3) {
                                      return { chr: 'g', cw: 6, ds: -2, de: 4 };
                                  }
                                  else {
                                      return { chr: 'q', cw: 6, ds: -2, de: 4 };
                                  }
                              }
                              else {
                                  return { chr: 'o', cw: 6, ds: -2, de: 4 };
                              }
                          }
                      }
                      else {
                          if (coldiffat(buf, x + 0, y - 4, r, g, b) < 3) {
                              if (coldiffat(buf, x + 2, y - 4, r, g, b) < 3) {
                                  return { chr: 'z', cw: 6, ds: -1, de: 5 };
                              }
                              else {
                                  return { chr: 'a', cw: 6, ds: -2, de: 4 };
                              }
                          }
                          else {
                              return { chr: 'm', cw: 7, ds: -1, de: 6 };
                          }
                      }
                  }
              }
              else {
                  if (coldiffat(buf, x + 0, y - 4, r, g, b) < 3) {
                      if (coldiffat(buf, x + 2, y - 4, r, g, b) < 3) {
                          return { chr: 'n', cw: 6, ds: -1, de: 5 };
                      }
                      else {
                          return { chr: 'c', cw: 5, ds: -2, de: 3 };
                      }
                  }
                  else {
                      if (coldiffat(buf, x + 2, y - 4, r, g, b) < 3) {
                          if (coldiffat(buf, x + 3, y - 4, r, g, b) < 3) {
                              return { chr: 's', cw: 6, ds: -1, de: 5 };
                          }
                          else {
                              if (coldiffat(buf, x + 1, y - 7, r, g, b) < 3) {
                                  return { chr: '6', cw: 7, ds: -2, de: 5 };
                              }
                              else {
                                  return { chr: 'p', cw: 6, ds: -1, de: 5 };
                              }
                          }
                      }
                      else {
                          if (coldiffat(buf, x + 1, y - 7, r, g, b) < 3) {
                              return { chr: '1', cw: 4, ds: -1, de: 3 };
                          }
                          else {
                              return { chr: 'V', cw: 7, ds: -3, de: 4 };
                          }
                      }
                  }
              }
          }
          else {
              if (coldiffat(buf, x + 0, y - 5, r, g, b) < 3) {
                  if (coldiffat(buf, x + 0, y - 4, r, g, b) < 3) {
                      if (coldiffat(buf, x - 1, y - 7, r, g, b) < 3) {
                          return { chr: '9', cw: 7, ds: -5, de: 2 };
                      }
                      else {
                          return { chr: 'A', cw: 7, ds: -1, de: 6 };
                      }
                  }
                  else {
                      if (coldiffat(buf, x - 2, y + 1, r, g, b) < 3) {
                          return { chr: 'j', cw: 5, ds: -3, de: 2 };
                      }
                      else {
                          return { chr: 'i', cw: 3, ds: -1, de: 2 };
                      }
                  }
              }
              else {
                  if (coldiffat(buf, x + 1, y - 5, r, g, b) < 3) {
                      if (coldiffat(buf, x + 2, y - 7, r, g, b) < 3) {
                          return { chr: 'Y', cw: 5, ds: -2, de: 3 };
                      }
                      else {
                          return { chr: 'f', cw: 5, ds: -2, de: 3 };
                      }
                  }
                  else {
                      if (coldiffat(buf, x - 1, y - 6, r, g, b) < 3) {
                          if (coldiffat(buf, x - 1, y - 7, r, g, b) < 3) {
                              return { chr: 'U', cw: 7, ds: -2, de: 5 };
                          }
                          else {
                              return { chr: 't', cw: 4, ds: -2, de: 2 };
                          }
                      }
                      else {
                          if (coldiffat(buf, x - 1, y - 4, r, g, b) < 3) {
                              if (coldiffat(buf, x + 2, y - 4, r, g, b) < 3) {
                                  return { chr: 'u', cw: 6, ds: -2, de: 4 };
                              }
                              else {
                                  return { chr: 'w', cw: 7, ds: -2, de: 5 };
                              }
                          }
                          else {
                              if (coldiffat(buf, x + 0, y - 4, r, g, b) < 3) {
                                  if (coldiffat(buf, x + 2, y - 4, r, g, b) < 3) {
                                      return { chr: 'r', cw: 5, ds: -1, de: 4 };
                                  }
                                  else {
                                      if (coldiffat(buf, x + 0, y - 3, r, g, b) < 3) {
                                          if (coldiffat(buf, x - 2, y - 5, r, g, b) < 3) {
                                              return { chr: '4', cw: 5, ds: -3, de: 2 };
                                          }
                                          else {
                                              return { chr: 'y', cw: 6, ds: -4, de: 2 };
                                          }
                                      }
                                      else {
                                          return { chr: 'x', cw: 7, ds: -1, de: 6 };
                                      }
                                  }
                              }
                              else {
                                  if (coldiffat(buf, x - 2, y - 5, r, g, b) < 3) {
                                      return { chr: 'W', cw: 9, ds: -3, de: 6 };
                                  }
                                  else {
                                      if (coldiffat(buf, x + 1, y - 7, r, g, b) < 3) {
                                          return { chr: '2', cw: 7, ds: -1, de: 6 };
                                      }
                                      else {
                                          if (coldiffat(buf, x + 2, y - 4, r, g, b) < 3) {
                                              return { chr: 'v', cw: 7, ds: -3, de: 4 };
                                          }
                                          else {
                                              return { chr: '_', cw: 7, ds: -2, de: 5 };
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  }

  var dx = 0;
  var empties = 0;
  var str = "";
  while (dx < maxwidth) {
      var color = null;
      for (var a = 0; a < colors.length; a++) {
          if (coldiffat(buf, x + dx, y, colors[a][0], colors[a][1], colors[a][2]) < 3) {
              color = colors[a];
              break;
          }
      }
      if (!color) { empties++; dx++; continue; }
      var chr = readplayerchar(buf, x + dx, y, color[0], color[1], color[2]);
      empties += chr.ds;
      if (empties >= 3 && str != "") { str += " "; }
      empties = 0;
      dx += chr.de;
      str += chr.chr;
  }
  return str;
}