export const config = {
  "backgroundMode": {
    "enable": true,
    "zIndex": -1
  },
  "fpsLimit": 60,
  "interactivity": {
    "events": {
/*      "onHover": {
        "enable": true,
        "mode": "trail"
      },*/
      "onClick": {
        "enable": true,
        "mode": "emitter"
      }
    },
    "modes": {
      "emitter": {
      }
    }
  },
  "particles": {
    "color": {
      "value": [
        "#444444",
        "#FFFFFF",
      ]
    },
    "links": {
      "enable": true,
      "distance": 50,
      "opacity": 0.8,
      "width": 4
    },
    "move": {
      "enable": true,
      "outMode": "destroy",
      "speed": 4,
      "trail": {
        "enable": true,
        "fillColor": "#000000",
        "length": 10
      },
    },
    "number": {
      "limit": 70,
      "value": 70
    },
    "opacity": {
      "value": 0.5,
      "animation": {
        "minimumValue": 0.1,
        "speed": 1
      }
    },
    "size": {
      "random": {
        "enable": true,
        "minimumValue": 4
      },
      "value": 7,
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
  "pauseOnBlur": false,
  "emitters": {
    "life": {},
    "rate": {
      "quantity": 1,
      "delay": 0.5
    },
    "size": {
      "mode": "precise",
      "height": 50,
      "width": 50
    },
    "position": {
      "x": 50,
      "y": 50
    }
  }
}