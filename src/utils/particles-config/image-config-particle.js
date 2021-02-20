export const config = {
  "background": {
    "color": {
      "value": "#000000"
    },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "backgroundMode": {
    "enable": true,
    "zIndex": 1
  },
  "detectRetina": false,
  "interactivity": {
    "events": {
      "onClick": {
        "mode": "push"
      },
      "onDiv": {
        "selectors": "#repulse-div",
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble"
      }
    },
    "modes": {
      "bubble": {
        "distance": 40,
        "duration": 2,
        "opacity": 8,
        "size": 6
      },
      "grab": {
        "distance": 400
      },
      "slow": {
        "factor": 1,
        "radius": 0
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "links": {
      "color": {
        "value": "#ffffff"
      },
      "distance": 30,
      "enable": true,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "default": "bounce",
        "bottom": "bounce",
        "left": "bounce",
        "right": "bounce",
        "top": "bounce"
      },
      "speed": 1
    },
    "number": {
      "density": {
        "area": 2000
      },
      "value": 400
    },
    "opacity": {
      "value": 0.4,
      "animation": {
        "enable": true,
        "minimumValue": 0.05
      }
    },
    "shape": {
      "options": {
        "character": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "polygon": {
          "sides": 5
        },
        "star": {
          "sides": 5
        },
        "image": {
          "height": 100,
          "replaceColor": true,
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100
        },
        "images": {
          "height": 100,
          "replaceColor": true,
          "src": "https://cdn.matteobruni.it/images/particles/github.svg",
          "width": 100
        }
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": 1,
      "animation": {
        "minimumValue": 0.1,
        "speed": 40
      }
    },
    "stroke": {
      "color": {
        "value": "#000000",
        "animation": {
          "enable": false,
          "speed": 1,
          "sync": true
        }
      }
    }
  },
  "polygon": {
    "draw": {
      "enable": true,
      "stroke": {
        "color": {
          "value": "rgba(255,255,255,0.2)"
        },
        "width": 0.5,
        "opacity": 0.2
      }
    },
    "enable": true,
    "inline": {
      "arrangement": "equidistant"
    },
    "move": {
      "radius": 10,
      "type": "path"
    },
    "scale": 2,
    "type": "inline",
    "url": "https://cdn.matteobruni.it/images/particles/hollowknight.svg"
  }
}