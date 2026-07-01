var APP_DATA = {
  "scenes": [
    {
      "id": "0-externa-do-bar",
      "name": "Externa do Bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.48049257924446565,
        "pitch": 0.4533604017633035,
        "fov": 1.366376471345483
      },
      "linkHotspots": [
        {
          "yaw": 2.8821314583788116,
          "pitch": 0.49393657696858995,
          "rotation": 0,
          "target": "2-bar-principal"
        },
        {
          "yaw": -1.7863286743447944,
          "pitch": 0.6198097823996029,
          "rotation": 6.283185307179586,
          "target": "4-area-da-churrasqueira"
        },
        {
          "yaw": -0.6843597643390318,
          "pitch": 0.8686984966641234,
          "rotation": 0,
          "target": "1-novo-lote-externo"
        },
        {
          "yaw": 0.48049257924446565,
          "pitch": 0.4533604017633035,
          "rotation": 0,
          "target": "3-externo-proximo-ao-portao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-novo-lote-externo",
      "name": "Novo Lote Externo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17418001316510434,
          "pitch": 0.6601713884764422,
          "rotation": 0,
          "target": "4-area-da-churrasqueira"
        },
        {
          "yaw": -0.728918828838836,
          "pitch": 0.7191568208570303,
          "rotation": 11.780972450961727,
          "target": "0-externa-do-bar"
        },
        {
          "yaw": -1.6998378661423992,
          "pitch": 0.6470111370147897,
          "rotation": 0,
          "target": "3-externo-proximo-ao-portao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bar-principal",
      "name": "Bar Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6322708183942956,
          "pitch": 0.3425972740586527,
          "rotation": 0,
          "target": "4-area-da-churrasqueira"
        },
        {
          "yaw": -2.904364587075907,
          "pitch": 0.7057161765427029,
          "rotation": 0,
          "target": "0-externa-do-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-externo-proximo-ao-portao",
      "name": "Externo Proximo ao Portao",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5725311678735014,
        "pitch": 0.4282948815403831,
        "fov": 1.366376471345483
      },
      "linkHotspots": [
        {
          "yaw": 1.6472429390688763,
          "pitch": 0.7815660221599927,
          "rotation": 0,
          "target": "1-novo-lote-externo"
        },
        {
          "yaw": -0.0057564864398109705,
          "pitch": 0.7300627807095061,
          "rotation": 0,
          "target": "0-externa-do-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-area-da-churrasqueira",
      "name": "Area da Churrasqueira",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3683882520462056,
          "pitch": 0.7469739273223297,
          "rotation": 0.7853981633974483,
          "target": "2-bar-principal"
        },
        {
          "yaw": -2.2683249669080396,
          "pitch": 0.5430681680092739,
          "rotation": 0,
          "target": "0-externa-do-bar"
        },
        {
          "yaw": 2.7134688411845893,
          "pitch": 0.606630051542016,
          "rotation": 0,
          "target": "1-novo-lote-externo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "The-Beer",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
