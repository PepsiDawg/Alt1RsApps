function start() {
  a1lib.identifyUrl("appconfig.json");
}







let ttImg = null;
ImageData.fromBase64(
  function(i){console.log(i)},
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAQCAYAAABpyU3qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQySURBVEhLXZXNi1xFFMXfdL/+fN39uqe7zWQIjjJjxoAkRBIyxm8JgiaLCaIuApGMIkSRgGDEjzBZBNSFuFATMwYXIiiKMGLARUhEcZVR/ANEsjO7SPQPuL7frZxnTS9uV9U9p06dulX1Ojm8bdYOzo7tyfHInp6/3RjTHoraA7O3eZ5Q/rHR0PvMpWVMX1w4jIVrbqwBl76CHAFHevTxFvPIJ/xAlnH1RWIiHITAJKaAA8YcjNDC0Rwi1qKN8bgoCq0T+5KO8ARAC5DUwiIJv3847X1aGYw5zFFfZpSb5GktDExicas8rfgaJ9oJhmgBJEYLHu885hDaCJhMkSenPlrS12bA4AhnrLXIEfQVjKVHeMVl6oGtodIygqAwjVUNRISTUzAWTwvRYpyWAJMBQvPUwtEYHD3mS5Nw479fyOz69w27frFptlHzYPxXEfQ/e6nr5PVTg//xgvvPj3X74Uxmz9wZxAiJs3mC8Tdv5PbWEwPPyyzrkkfr30Ln7eWeG/zyZKfMfXAs36Sr0yUSfj4sCP1azdrVql0+m/rEJEl8vLVftRcPV2wxy7zqYJc+Th1/+anAfef5hj0+Eyo0Wdlnt4/cxC+f1O3eYd81hBPSq01N2e5e102VuUrF7u5knpOuNu13nM6OftfB39ZapXEwcg/PjB3fMwgVQnTUaGxaeKHXKc0oML52vOMnA+/RnfUSU+U0f7ooHKbAylwj8OFJT/PdOIaUiI0zAUyChEQxTp7x689VinG9NBMvwHU7+lDQPP9m1fb2gx6c2Djz4cc5NsOYvDQpJH03zkBx9Xy45xhnLDGCcSlaLPTRSjghuPNZ23EtRP/Egdz++KplzWrFrt4qyF2jeqmLgdikChivIW4crJEAICDCxtpm49rp/n7PWzDi2nehXT3S9kXBqGRcoY0LLbt5pW7X1sNjg8/pLG0J33rpYZI3xpg1leNU40LQ542wjldcABEb39/L3QAThEsU/Nt3w+PkKqABjznwjtwzsJuF2blBeGSt4qHfuFKzP9dTPx1xJ40TylEQPtHKqzCEV5wkx0TExpUDl/lYdHn72H46V7Mbl2v2wiPh9WOGOV+8ltml91uWFl+LfdMDxy6eCZ+6g0tpqVnqTdzxXz8Pm+Gkjz849GuJrjay6arwLdUXgIe0shRMgzHh01d6jmH09Ep4jIcWRrb+Xrg2X682fTNnb31Jfj5Xt4VhuKcE32V4VP3V5Y7zpLd6LHUfyhF/Fyek/5Kj9+W2kIcvH+smOlp2Q7vY7XiVqPi4qMKuvOd5jNPe0c0cgzPXbnt+d1GVLa2G52eaDf98gtUqU5anaXmnifni/wAeD3Yxa9lco1nqbWs1nbOjWJOc8u206n28cF3wkciwNkDoSDQmVHmEwTSPUB8OEWPoai55YeS5BrRowqHVvFhjMrdnkNt/SCCtlid+xoAAAAAASUVORK5CYII=");

  console.log(ttImg);