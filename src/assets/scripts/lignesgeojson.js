// === Lignes GeoJSON ===
const LigneD_BOVOZOVO = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": RERD_BOVO
        },
        "properties": {
          "name": "RER D Juvisy-Malesherbes",
          "color": Dcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": RERD_BIVOM
        },
        "properties": {
          "name": "RER D direct Juvisy - Gare de Lyon (à certaines heures)",
          "color": Dcol,
          "dashArray": "10 10"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": RERD_ZOVO
        },
        "properties": {
          "name": "RER D Corbeil-Melun",
          "color": Dcol
        }
      }
    ]
  };

  const LigneH = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneH_POMA
        },
        "properties": {
          "name": "Ligne H",
          "color": Hcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneH_TSOL
        },
        "properties": {
          "name": "Ligne H",
          "color": Hcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneH_LOMIM
        },
        "properties": {
          "name": "Ligne H",
          "color": Hcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneH_OPOCM
        },
        "properties": {
          "name": "Ligne H",
          "color": Hcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneH_POVAM
        },
        "properties": {
          "name": "Ligne H",
          "color": Hcol
        }
      }
    ]
  };

  const LigneJ = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneJ_EAPE
        },
        "properties": {
          "name": "Ligne J",
          "color": Jcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneJ_MOCAM
        },
        "properties": {
          "name": "Ligne J",
          "color": Jcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneJ_JOLEM
        },
        "properties": {
          "name": "Ligne J",
          "color": Jcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneJ_GOCAM
        },
        "properties": {
          "name": "Ligne J",
          "color": Jcol
        }
      }
    ]
  };

  const LigneK = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneK_
        },
        "properties": {
          "name": "Ligne K",
          "color": Kcol
        }
      }
    ]
  };

  const LigneL = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneL_SEGU
        },
        "properties": {
          "name": "Ligne L",
          "color": Lcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneL_UOPYM
        },
        "properties": {
          "name": "Ligne L",
          "color": Lcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneL_VASAM
        },
        "properties": {
          "name": "Ligne L",
          "color": Lcol
        }
      }
    ]
  };

  const LigneN = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneN_ROPO
        },
        "properties": {
          "name": "Ligne N",
          "color": Ncol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneN_DAPOM
        },
        "properties": {
          "name": "Ligne N",
          "color": Ncol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneN_MOPIM
        },
        "properties": {
          "name": "Ligne N",
          "color": Ncol
        }
      }
    ]
  };

  const LigneP = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneP_ZIMO
        },
        "properties": {
          "name": "Ligne P",
          "color": Pcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneP_CITUM
        },
        "properties": {
          "name": "Ligne P",
          "color": Pcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneP_XIBUM
        },
        "properties": {
          "name": "Ligne P",
          "color": Pcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneP_FOMOM
        },
        "properties": {
          "name": "Ligne P",
          "color": Pcol
        }
      }
    ]
  };

  const LigneT14 = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": T14
        },
        "properties": {
          "name": "Tram T14",
          "color": Ncol
        }
      }
    ]
  };

  const LigneR = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneR_GAMO
        },
        "properties": {
          "name": "ligne R",
          "color": Rcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneR_KUMOM
        },
        "properties": {
          "name": "Ligne R",
          "color": Rcol
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneR_KOHO
        },
        "properties": {
          "name": "Ligne R",
          "color": Rcol
        }
      }
    ]
  };

  const LigneU = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneU_
        },
        "properties": {
          "name": "Ligne U",
          "color": Ucol
        }
      }
    ]
  };

  const LigneBusP = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": BusP
        },
        "properties": {
          "name": "Ligne U",
          "color": IDFJauneVif
        }
      }
    ]
  };

  const LigneV = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "LineString",
          "coordinates": LigneV_
        },
        "properties": {
          "name": "Ligne V",
          "color": Kcol
        }
      }
    ]
  };