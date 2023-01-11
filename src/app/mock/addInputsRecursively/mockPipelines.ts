/*
This file contains a json object of pipelines that nodemaker supports.
They are tested in 'pipeline-editor.component.spec.ts' to make sure 
the attributes are parsed properly.

To simulate a list of added pipelines use the following:
- 'Object.values(mockPipelines)' --> This converts the json to an array

*/

export const mockPipelines = {
    "TerrainTiles": {
        "name": "TestLayer",
        "id": 1,
        "data": {
            "TerrainTiles": {
                "node": "datalib.terraintiles.TerrainTiles",
                "style": {
                    "units": "m"
                },
                "attrs": {
                    "bucket": "elevation-tiles-prod",
                    "interpolation": "nearest",
                    "tile_format": "geotiff",
                    "urls": [],
                    "zoom": 1
                }
            }
        }
    },
    "Arithmetic": {
        "name": "Arithmetic",
        "id": 3,
        "data": {
            "AAA_input_TestLayer_input_AAA": {
                "node": "datalib.terraintiles.TerrainTiles",
                "style": {
                    "units": "m"
                },
                "attrs": {
                    "bucket": "elevation-tiles-prod",
                    "interpolation": "nearest",
                    "tile_format": "geotiff",
                    "urls": [],
                    "zoom": 1
                }
            },
            "Arithmetic": {
                "node": "core.algorithm.generic.Arithmetic",
                "style": {},
                "attrs": {
                    "eqn": "TestLayer + TestLayer",
                    "params": {}
                },
                "inputs": {
                    "TestLayer": "AAA_input_TestLayer_input_AAA"
                }
            }
        }
    },
    "Arithmetic1": {
        "name": "Arithmetic1",
        "id": 4,
        "data": {
            "AAA_input_TestLayer_input_AAA": {
                "node": "datalib.terraintiles.TerrainTiles",
                "style": {
                    "units": "m"
                },
                "attrs": {
                    "bucket": "elevation-tiles-prod",
                    "interpolation": "nearest",
                    "tile_format": "geotiff",
                    "urls": [],
                    "zoom": 1
                }
            },
            "AAA_input_Arithmetic_input_AAA": {
                "node": "core.algorithm.generic.Arithmetic",
                "style": {},
                "attrs": {
                    "eqn": "TestLayer + TestLayer",
                    "params": {}
                },
                "inputs": {
                    "TestLayer": "AAA_input_TestLayer_input_AAA"
                }
            },
            "Arithmetic": {
                "node": "core.algorithm.generic.Arithmetic",
                "style": {},
                "attrs": {
                    "eqn": "Arithmetic + Arithmetic",
                    "params": {}
                },
                "inputs": {
                    "Arithmetic": "AAA_input_Arithmetic_input_AAA"
                }
            }
        }
    },
    "Arithmetic2": {
        "name": "Arithmetic2",
        "id": 5,
        "data": {
            "AAA_input_TestLayer_input_AAA": {
                "node": "datalib.terraintiles.TerrainTiles",
                "style": {
                    "units": "m"
                },
                "attrs": {
                    "bucket": "elevation-tiles-prod",
                    "interpolation": "nearest",
                    "tile_format": "geotiff",
                    "urls": [],
                    "zoom": 1
                }
            },
            "AAA_input_Arithmetic_input_AAA": {
                "node": "core.algorithm.generic.Arithmetic",
                "style": {},
                "attrs": {
                    "eqn": "TestLayer + TestLayer",
                    "params": {}
                },
                "inputs": {
                    "TestLayer": "AAA_input_TestLayer_input_AAA"
                }
            },
            "AAA_input_Arithmetic1_input_AAA": {
                "node": "core.algorithm.generic.Arithmetic",
                "style": {},
                "attrs": {
                    "eqn": "Arithmetic + Arithmetic",
                    "params": {}
                },
                "inputs": {
                    "Arithmetic": "AAA_input_Arithmetic_input_AAA"
                }
            },
            "Arithmetic": {
                "attrs": {
                    "eqn": "Arithmetic1 + Arithmetic1",
                    "params": {}
                },
                "node": "core.algorithm.generic.Arithmetic",
                "style": {},
                "inputs": {
                    "Arithmetic1": "AAA_input_Arithmetic1_input_AAA"
                }
            }
        }
    },
    "SelectCoordinates": {
        "name": "SelectCoordinates",
        "id": 7,
        "data": {
            "AAA_input_TestLayer_input_AAA": {
                "node": "datalib.terraintiles.TerrainTiles",
                "style": {
                    "units": "m"
                },
                "attrs": {
                    "bucket": "elevation-tiles-prod",
                    "interpolation": "nearest",
                    "tile_format": "geotiff",
                    "urls": [],
                    "zoom": 1
                }
            },
            "SelectCoordinates": {
                "attrs": {
                    "alt": [],
                    "lat": [],
                    "lon": [],
                    "substitute_eval_coords": false,
                    "time": []
                },
                "node": "core.algorithm.coord_select.SelectCoordinates",
                "style": {},
                "inputs": {
                    "source": "AAA_input_TestLayer_input_AAA"
                }
            }
        }
    },
    "ExpandCoordinates": {
        "name": "ExpandCoordinates",
        "id": 8,
        "data": {
            "AAA_input_TestLayer_input_AAA": {
                "node": "datalib.terraintiles.TerrainTiles",
                "style": {
                    "units": "m"
                },
                "attrs": {
                    "bucket": "elevation-tiles-prod",
                    "interpolation": "nearest",
                    "tile_format": "geotiff",
                    "urls": [],
                    "zoom": 1
                }
            },
            "ExpandCoordinates": {
                "attrs": {
                    "alt": [],
                    "bounds_only": false,
                    "lat": [],
                    "lon": [],
                    "time": []
                },
                "node": "core.algorithm.coord_select.ExpandCoordinates",
                "style": {},
                "inputs": {
                    "source": "AAA_input_TestLayer_input_AAA"
                }
            }
        }
    },
    "Median": {
        "name": "Median",
        "id": 9,
        "data": {
            "AAA_input_TestLayer_input_AAA": {
                "node": "datalib.terraintiles.TerrainTiles",
                "style": {
                    "units": "m"
                },
                "attrs": {
                    "bucket": "elevation-tiles-prod",
                    "interpolation": "nearest",
                    "tile_format": "geotiff",
                    "urls": [],
                    "zoom": 1
                }
            },
            "Median": {
                "attrs": {
                    "dims": [
                        "lat"
                    ]
                },
                "node": "core.algorithm.stats.Median",
                "style": {},
                "inputs": {
                    "source": "AAA_input_TestLayer_input_AAA"
                }
            }
        }
    },
    "Mean": {
        "name": "Mean",
        "id": 10,
        "data": {
            "AAA_input_TestLayer_input_AAA": {
                "node": "datalib.terraintiles.TerrainTiles",
                "style": {
                    "units": "m"
                },
                "attrs": {
                    "bucket": "elevation-tiles-prod",
                    "interpolation": "nearest",
                    "tile_format": "geotiff",
                    "urls": [],
                    "zoom": 1
                }
            },
            "Mean": {
                "attrs": {
                    "dims": [
                        "lat"
                    ]
                },
                "node": "core.algorithm.stats.Mean",
                "style": {},
                "inputs": {
                    "source": "AAA_input_TestLayer_input_AAA"
                }
            }
        }
    }
}