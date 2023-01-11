export const initialSpec = {
   "data": {
       "CSV": {
           "help": "<div class=\"document\">\n\n\n<p>CSV datasource with interpolation.</p>\n</div>\n",
           "module": "podpac.core.data.csv_source.CSV",
           "attrs": {
               "alt_key": {
                   "type": [
                       "Unicode",
                       "Int"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": "alt",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "anon": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa27290400>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "cf_calendar": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c730>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "cf_time": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5c6d0>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "cf_units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c700>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "coordinate_index_type": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa2729e5b0>",
                   "values": [
                       "slice",
                       "numpy",
                       "xarray"
                   ],
                   "default": "numpy",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "crs": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c6a0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "data_key": {
                   "type": [
                       "Unicode",
                       "Int",
                       "List",
                       "List"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "header": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa26d64880>",
                   "values": null,
                   "default": 0,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lat_key": {
                   "type": [
                       "Unicode",
                       "Int"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": "lat",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lon_key": {
                   "type": [
                       "Unicode",
                       "Int"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": "lon",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2729e4c0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "skip_validation": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5c760>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c0d0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "time_key": {
                   "type": [
                       "Unicode",
                       "Int"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": "time",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Dataset": {
           "help": "<div class=\"document\">\n\n\n<p>xarray dataset source with interpolation.</p>\n</div>\n",
           "module": "podpac.core.data.dataset_source.Dataset",
           "attrs": {
               "alt_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c670>",
                   "values": null,
                   "default": "alt",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "anon": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa27290400>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "cf_calendar": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c730>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "cf_time": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5c6d0>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "cf_units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c700>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "crs": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c6a0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "data_key": {
                   "type": [
                       "Unicode",
                       "List"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "infer_podpac_coords": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d6e550>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lat_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c5b0>",
                   "values": null,
                   "default": "lat",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lon_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c610>",
                   "values": null,
                   "default": "lon",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2729e4c0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "selection": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa26d6e4f0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "skip_validation": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5c760>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c0d0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "time_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c640>",
                   "values": null,
                   "default": "time",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "H5PY": {
           "help": "<div class=\"document\">\n\n\n<p>h5py datasource with interpolation.</p>\n</div>\n",
           "module": "podpac.core.data.h5py_source.H5PY",
           "attrs": {
               "alt_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c670>",
                   "values": null,
                   "default": "alt",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "cf_calendar": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c730>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "cf_time": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5c6d0>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "cf_units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c700>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "coordinate_index_type": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa2729e5b0>",
                   "values": [
                       "slice",
                       "numpy",
                       "xarray"
                   ],
                   "default": "numpy",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "crs": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c6a0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "data_key": {
                   "type": [
                       "Unicode",
                       "List"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lat_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c5b0>",
                   "values": null,
                   "default": "lat",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lon_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c610>",
                   "values": null,
                   "default": "lon",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2729e4c0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "skip_validation": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5c760>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c0d0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "time_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c640>",
                   "values": null,
                   "default": "time",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "OGR": {
           "help": "<div class=\"document\">\n\n\n<p>No help text to display.</p>\n</div>\n",
           "module": "podpac.core.data.ogr.OGR",
           "attrs": {
               "attribute": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d79dc0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "layer": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d79ca0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa26d79e20>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d79df0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d79c70>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "PyDAP": {
           "help": "<div class=\"document\">\n\n\n<p>OpenDAP datasource with interpolation.</p>\n</div>\n",
           "module": "podpac.core.data.pydap_source.PyDAP",
           "attrs": {
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "data_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa2729ef10>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2729e4c0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "server_throttle_retries": {
                   "type": "Int",
                   "type_str": "<traitlets.traitlets.Int object at 0x7ffa2729ef70>",
                   "values": null,
                   "default": 100,
                   "help": "Number of retries for a throttled server.",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "server_throttle_sleep_time": {
                   "type": "Float",
                   "type_str": "<traitlets.traitlets.Float object at 0x7ffa2729ef40>",
                   "values": null,
                   "default": 0.001,
                   "help": "Some server have a throttling time for requests per period. ",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa2729eeb0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Rasterio": {
           "help": "<div class=\"document\">\n\n\n<p>Rasterio datasource with interpolation.</p>\n</div>\n",
           "module": "podpac.core.data.rasterio_source.Rasterio",
           "attrs": {
               "anon": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa27290400>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "aws_https": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5ca60>",
                   "values": null,
                   "default": true,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "band": {
                   "type": "CInt",
                   "type_str": "<traitlets.traitlets.CInt object at 0x7ffa26d52850>",
                   "values": null,
                   "default": 1,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "crs": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d52880>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "prefer_overviews": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5ca90>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "prefer_overviews_closest": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5cac0>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c0d0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "ReprojectedSource": {
           "help": "<div class=\"document\">\n\n\n<p>Create a DataSource with a different resolution from another Node. This can be used to bilinearly interpolated a\ndataset after averaging over a larger area.</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>source</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">Node</span></dt>\n<dd><p class=\"first last\">The source node</p>\n</dd>\n<dt><strong>source_interpolation</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">Type of interpolation method to use for the source node</p>\n</dd>\n<dt><strong>reprojected_coordinates</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\"><a href=\"#id1\"><span class=\"problematic\" id=\"id2\">:class:`podpac.Coordinates`</span></a></span></dt>\n<dd><div class=\"first system-message\" id=\"id1\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 27); <em><a href=\"#id2\">backlink</a></em></p>\n<p>Unknown interpreted text role &quot;class&quot;.</p>\n</div>\n<p class=\"last\">Coordinates where the source node should be evaluated.</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.data.reprojection.ReprojectedSource",
           "attrs": {
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "coordinate_index_type": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa2729e5b0>",
                   "values": [
                       "slice",
                       "numpy",
                       "xarray"
                   ],
                   "default": "numpy",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2729e4c0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "reprojected_coordinates": {
                   "type": "Coordinates",
                   "type_str": "<class 'podpac.core.coordinates.coordinates.Coordinates'>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa26d853a0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "source_interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa26d85400>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "WCS": {
           "help": "<div class=\"document\">\n\n\n<p>WCS datasource with podpac interpolation.</p>\n</div>\n",
           "module": "podpac.core.data.ogc.WCS",
           "attrs": {
               "allow_mock_client": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d796a0>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "layer": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d79610>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2729e4c0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d795e0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               },
               "version": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d79640>",
                   "values": null,
                   "default": "1.0.0",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               }
           },
           "style": {}
       },
       "Zarr": {
           "help": "<div class=\"document\">\n\n\n<p>Zarr Datasource with Interpolation.</p>\n</div>\n",
           "module": "podpac.core.data.zarr_source.Zarr",
           "attrs": {
               "alt_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c670>",
                   "values": null,
                   "default": "alt",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "anon": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa27290400>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "cf_calendar": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c730>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "cf_time": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5c6d0>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "cf_units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c700>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "crs": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c6a0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "data_key": {
                   "type": [
                       "Unicode",
                       "List"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lat_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c5b0>",
                   "values": null,
                   "default": "lat",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lon_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c610>",
                   "values": null,
                   "default": "lon",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2729e4c0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "skip_validation": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26d5c760>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c0d0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "time_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26d5c640>",
                   "values": null,
                   "default": "time",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       }
   },
   "algorithm": {
       "Arange": {
           "help": "<div class=\"document\">\n\n\n<p>A simple test node that gives each value in the output a number.</p>\n</div>\n",
           "module": "podpac.core.algorithm.utility.Arange",
           "attrs": {
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Arithmetic": {
           "help": "<div class=\"document\">\n\n\n<p>Create a simple point-by-point computation using named input nodes.</p>\n<p class=\"rubric\">Examples</p>\n<p>a = SinCoords()\nb = Arange()\narith = Arithmetic(A=a, B=b, eqn = 'A * B + {offset}', params={'offset': 1})</p>\n</div>\n",
           "module": "podpac.core.algorithm.generic.Arithmetic",
           "attrs": {
               "eqn": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36c68640>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "inputs": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa36c68550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "key": "Unicode",
                       "value": "NodeTrait"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "params": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa36c686a0>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "CoordData": {
           "help": "<div class=\"document\">\n\n\n<p>Extracts the coordinates from a request and makes it available as a data</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>coord_name</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">Name of coordinate to extract (one of lat, lon, time, alt)</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.algorithm.utility.CoordData",
           "attrs": {
               "coord_name": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa36c68a90>",
                   "values": [
                       "time",
                       "lat",
                       "lon",
                       "alt"
                   ],
                   "default": "none",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Count": {
           "help": "<div class=\"document\">\n\n\n<p>Counts the finite values across dimension(s)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Count",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "DayOfYear": {
           "help": "<div class=\"document\">\n\n\n<p>Group a time-dependent source node by day of year and compute a statistic for each group.</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>custom_reduce_fn</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">function</span></dt>\n<dd><p class=\"first last\">required if reduce_fn is 'custom'.</p>\n</dd>\n<dt><strong>reduce_fn</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">builtin xarray groupby reduce function, or 'custom'.</p>\n</dd>\n<dt><strong>source</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">podpac.Node</span></dt>\n<dd><p class=\"first last\">Source node</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.algorithm.stats.DayOfYear",
           "attrs": {
               "coordinates_source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa2f070fd0>",
                   "values": null,
                   "default": "source",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "custom_reduce_fn": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2f0706d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "reduce_fn": {
                   "type": "CaselessStrEnum",
                   "type_str": "<traitlets.traitlets.CaselessStrEnum object at 0x7ffa2f0708b0>",
                   "values": [
                       "all",
                       "any",
                       "count",
                       "max",
                       "mean",
                       "median",
                       "min",
                       "prod",
                       "std",
                       "sum",
                       "var",
                       "custom"
                   ],
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "ExpandCoordinates": {
           "help": "<div class=\"document\">\n\n\n<p>Evaluate a source node with expanded coordinates.</p>\n<p>This is normally used in conjunction with a reduce operation\nto calculate, for example, the average temperature over the last month. While this is simple to do when evaluating\na single node (just provide the coordinates), this functionality is needed for nodes buried deeper in a pipeline.</p>\n<dl class=\"docutils\">\n<dt>lat, lon, time, alt <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">List</span></dt>\n<dd><dl class=\"first last docutils\">\n<dt>Expansion parameters for the given dimension: The options are::</dt>\n<dd><ul class=\"first last simple\">\n<li>[start_offset, end_offset, step] to expand uniformly around each input coordinate.</li>\n<li>[start_offset, end_offset] to expand using the available source coordinates around each input coordinate.</li>\n</ul>\n</dd>\n</dl>\n</dd>\n<dt>bounds_only: bool</dt>\n<dd>Default is False. If True, will only expand the bounds of the overall coordinates request. Otherwise, it will\nexpand around EACH coordinate in the request. For example, with bounds_only == True, and an expansion of 3\nyou may expand [5, 6, 8] to [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], whereas with bounds_only == False, it becomes\n[[2, 5, 8], [3, 6, 9], [5, 8, 11]] (brackets added for clarity, they will be concatenated).</dd>\n</dl>\n</div>\n",
           "module": "podpac.core.algorithm.coord_select.ExpandCoordinates",
           "attrs": {
               "alt": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2f076130>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "bounds_only": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa2f0762b0>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "coordinates_source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa2f076040>",
                   "values": null,
                   "default": "source",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "lat": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2f0760a0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lon": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2f0760d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "time": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2f076100>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               }
           },
           "style": {}
       },
       "Generic": {
           "help": "<div class=\"document\">\n\n\n<p>Generic Algorithm Node that allows arbitrary Python code to be executed.</p>\n<p class=\"rubric\">Examples</p>\n<p>a = SinCoords()\nb = Arange()\ncode = '''import numpy as np\noutput = np.minimum(a, b)\n'''\ngeneric = Generic(code=code, a=a, b=b)</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>code</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">The multi-line code that will be evaluated. This code should assign &quot;output&quot; to the desired result, and &quot;output&quot;\nneeds to be a &quot;numpy array&quot; or &quot;xarray DataArray&quot;</p>\n</dd>\n<dt><strong>inputs</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">dict(str: podpac.Node)</span></dt>\n<dd><p class=\"first last\">A dictionary of PODPAC nodes that will serve as the input data for the Python script</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.algorithm.generic.Generic",
           "attrs": {
               "code": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36c68760>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "inputs": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa36c68550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "key": "Unicode",
                       "value": "NodeTrait"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "GroupReduce": {
           "help": "<div class=\"document\">\n\n\n<p>Group a time-dependent source node and then compute a statistic for each result.</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>custom_reduce_fn</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">function</span></dt>\n<dd><p class=\"first last\">required if reduce_fn is 'custom'.</p>\n</dd>\n<dt><strong>groupby</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">datetime sub-accessor. Currently 'dayofyear' is the enabled option.</p>\n</dd>\n<dt><strong>reduce_fn</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">builtin xarray groupby reduce function, or 'custom'.</p>\n</dd>\n<dt><strong>source</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">podpac.Node</span></dt>\n<dd><p class=\"first last\">Source node</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.algorithm.stats.GroupReduce",
           "attrs": {
               "coordinates_source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa2f070fd0>",
                   "values": null,
                   "default": "source",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "custom_reduce_fn": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2f0706d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "groupby": {
                   "type": "CaselessStrEnum",
                   "type_str": "<traitlets.traitlets.CaselessStrEnum object at 0x7ffa2f070f70>",
                   "values": [
                       "dayofyear",
                       "weekofyear",
                       "season",
                       "month"
                   ],
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "reduce_fn": {
                   "type": "CaselessStrEnum",
                   "type_str": "<traitlets.traitlets.CaselessStrEnum object at 0x7ffa2f0708b0>",
                   "values": [
                       "all",
                       "any",
                       "count",
                       "max",
                       "mean",
                       "median",
                       "min",
                       "prod",
                       "std",
                       "sum",
                       "var",
                       "custom"
                   ],
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Kurtosis": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the kurtosis across dimension(s)</p>\n<p>TODO null behavior when there is NO data (currently different in reduce and reduce_chunked)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Kurtosis",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Mask": {
           "help": "<div class=\"document\">\n\n\n<p>Masks the <cite>source</cite> based on a boolean expression involving the <cite>mask</cite>\n(i.e. source[mask &lt;bool_op&gt; &lt;bool_val&gt; ] = &lt;masked_val&gt;).\nFor a normal boolean mask input, default values for <cite>bool_op</cite>, <cite>bool_val</cite> and <cite>masked_val</cite> can be used.</p>\n<p class=\"rubric\">Examples</p>\n<p># Mask data from a boolean data node using the default behavior.\n# Create a boolean masked Node (as an example)\nb = Arithmetic(A=SinCoords(), eqn='A&gt;0)\n# Create the source node\na = Arange()\nmasked = Mask(source=a, mask=b)</p>\n<p># Create a node that make the following substitution &quot;a[b &gt; 0] = np.nan&quot;\na = Arange()\nb = SinCoords()\nmasked = Mask(source=a, mask=b,</p>\n<div class=\"system-message\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 31)</p>\nUnexpected indentation.</div>\n<blockquote>\nmasked_val=np.nan,\nbool_val=0, bool_op='&gt;'\nin_place=True)</blockquote>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>source</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">podpac.Node</span></dt>\n<dd><p class=\"first last\">The source that will be masked</p>\n</dd>\n<dt><strong>mask</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">podpac.Node</span></dt>\n<dd><p class=\"first last\">The data that will be used to compute the mask</p>\n</dd>\n<dt><strong>masked_val</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">float, optional</span></dt>\n<dd><p class=\"first last\">Default value is np.nan. The value that will replace the masked items.</p>\n</dd>\n<dt><strong>bool_val</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">float, optional</span></dt>\n<dd><p class=\"first last\">Default value is 1. The value used to compare the mask when creating the boolean expression</p>\n</dd>\n<dt><strong>bool_op</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">enum, optional</span></dt>\n<dd><p class=\"first last\">Default value is '=='. One of ['==', '&lt;', '&lt;=', '&gt;', '&gt;=']</p>\n</dd>\n<dt><strong>in_place</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">bool, optional</span></dt>\n<dd><p class=\"first last\">Default is False. If True, the source array will be changed in-place, which could affect the value of the source\nin other parts of the pipeline.</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.algorithm.generic.Mask",
           "attrs": {
               "bool_op": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa36c68910>",
                   "values": [
                       "==",
                       "<",
                       "<=",
                       ">",
                       ">="
                   ],
                   "default": "==",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "bool_val": {
                   "type": "Float",
                   "type_str": "<traitlets.traitlets.Float object at 0x7ffa36c688b0>",
                   "values": null,
                   "default": 1,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "in_place": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa36c68970>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "mask": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36c68850>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "masked_val": {
                   "type": "Float",
                   "type_str": "<traitlets.traitlets.Float object at 0x7ffa36c68880>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36c687f0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Max": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the maximum across dimension(s)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Max",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Mean": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the mean across dimension(s)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Mean",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Median": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the median across dimension(s)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Median",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Min": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the minimum across dimension(s)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Min",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Percentile": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the percentile across dimension(s)</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>percentile</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">TYPE</span></dt>\n<dd><p class=\"first last\">Description</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Percentile",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "percentile": {
                   "type": "Float",
                   "type_str": "<traitlets.traitlets.Float object at 0x7ffa2f070d00>",
                   "values": null,
                   "default": 50,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Reproject": {
           "help": "<div class=\"document\">\n\n\n<p>Create a Algorithm that evalutes a Node with one set of coordinates, and then interpolates it.\nThis can be used to bilinearly interpolate an averaged dataset, for example.</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>source</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">Node</span></dt>\n<dd><p class=\"first last\">The source node. This node will use it's own, specified interpolation scheme</p>\n</dd>\n<dt><strong>interpolation</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">Type of interpolation method to use for the interpolation</p>\n</dd>\n<dt><strong>coordinates</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">Coordinates, Node, str, dict</span></dt>\n<dd><p class=\"first last\">Coordinates used to evaluate the source. These can be specified as a dictionary, json-formatted string,\nPODPAC Coordinates, or a PODPAC Node, where the node MUST implement the 'coordinates' attribute.</p>\n</dd>\n<dt><strong>reproject_dims</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">list</span></dt>\n<dd><p class=\"first last\">Dimensions to reproject. The source will be evaluated with the reprojection coordinates in these dims\nand the requested coordinates for any other dims.</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.algorithm.reprojection.Reproject",
           "attrs": {
               "coordinates": {
                   "type": [
                       "NodeTrait",
                       "Dict",
                       "Unicode",
                       "Instance"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": null,
                   "help": "Coordinates used to evaluate the source. These can be specified as a dictionary,\n                           json-formatted string, PODPAC Coordinates, or a PODPAC Node, where the node MUST implement\n                           the 'coordinates' attribute",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa272837c0>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "reproject_dims": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa27283ac0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa27283670>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "source_id": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa27283760>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "ResampleReduce": {
           "help": "<div class=\"document\">\n\n\n<p>Resample a time-dependent source node using a statistical operation to achieve the result.</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>custom_reduce_fn</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">function</span></dt>\n<dd><p class=\"first last\">required if reduce_fn is 'custom'.</p>\n</dd>\n<dt><strong>resample</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">datetime sub-accessor. Currently 'dayofyear' is the enabled option.</p>\n</dd>\n<dt><strong>reduce_fn</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">builtin xarray groupby reduce function, or 'custom'.</p>\n</dd>\n<dt><strong>source</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">podpac.Node</span></dt>\n<dd><p class=\"first last\">Source node</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.algorithm.stats.ResampleReduce",
           "attrs": {
               "coordinates_source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa2f070f40>",
                   "values": null,
                   "default": "source",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "custom_reduce_fn": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2f076670>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "reduce_fn": {
                   "type": "CaselessStrEnum",
                   "type_str": "<traitlets.traitlets.CaselessStrEnum object at 0x7ffa2f076640>",
                   "values": [
                       "all",
                       "any",
                       "count",
                       "max",
                       "mean",
                       "median",
                       "min",
                       "prod",
                       "std",
                       "sum",
                       "var",
                       "custom"
                   ],
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "resample": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa2f0765e0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "SelectCoordinates": {
           "help": "<div class=\"document\">\n\n\n<p>Evaluate a source node with select coordinates.</p>\n<p>While this is simple to do when\nevaluating a single node (just provide the coordinates), this functionality is needed for nodes buried deeper in a\npipeline. For example, if a single spatial reference point is used for a particular comparison, and this reference\npoint is different than the requested coordinates, we need to explicitly select those coordinates using this Node.</p>\n<dl class=\"docutils\">\n<dt>lat, lon, time, alt <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">List</span></dt>\n<dd><dl class=\"first last docutils\">\n<dt>Selection parameters for the given dimension: The options are::</dt>\n<dd><ul class=\"first last simple\">\n<li>[value]: select this coordinate value</li>\n<li>[start, stop]: select the available source coordinates within the given bounds</li>\n<li>[start, stop, step]: select uniform coordinates defined by the given start, stop, and step</li>\n</ul>\n</dd>\n</dl>\n</dd>\n</dl>\n</div>\n",
           "module": "podpac.core.algorithm.coord_select.SelectCoordinates",
           "attrs": {
               "alt": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2f076130>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "coordinates_source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa2f076040>",
                   "values": null,
                   "default": "source",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "lat": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2f0760a0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lon": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2f0760d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "substitute_eval_coords": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa2f076160>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "time": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2f076100>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "SinCoords": {
           "help": "<div class=\"document\">\n\n\n<p>A simple test node that creates a data based on coordinates and trigonometric (sin) functions.</p>\n</div>\n",
           "module": "podpac.core.algorithm.utility.SinCoords",
           "attrs": {
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {
               "colormap": "jet",
               "clim": [
                   -1,
                   1
               ]
           }
       },
       "Skew": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the skew across dimension(s)</p>\n<p>TODO null behavior when there is NO data (currently different in reduce and reduce_chunked)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Skew",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "StandardDeviation": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the standard deviation across dimension(s)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.StandardDeviation",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Sum": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the sum across dimension(s)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Sum",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "TransformTimeUnits": {
           "help": "<div class=\"document\">\n\n\n<p>No help text to display.</p>\n</div>\n",
           "module": "podpac.core.algorithm.coord_select.TransformTimeUnits",
           "attrs": {
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "substitute_eval_coords": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa2f076160>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "time_units": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa2f076430>",
                   "values": [
                       "day",
                       "dayofweek",
                       "dayofyear",
                       "daysinmonth",
                       "microsecond",
                       "minute",
                       "month",
                       "nanosecond",
                       "quarter",
                       "season",
                       "second",
                       "time",
                       "week",
                       "weekday",
                       "weekday_name",
                       "weekofyear",
                       "year"
                   ],
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "UnaryAlgorithm": {
           "help": "<div class=\"document\">\n\n\n<p>Base class for computation nodes that take a single source and transform it.</p>\n<p class=\"rubric\">Notes</p>\n<p>Developers of new Algorithm nodes need to implement the <cite>eval</cite> method.</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>source</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">Node</span></dt>\n<dd><p class=\"first last\">The source node</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.algorithm.algorithm.UnaryAlgorithm",
           "attrs": {
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Variance": {
           "help": "<div class=\"document\">\n\n\n<p>Computes the variance across dimension(s)</p>\n</div>\n",
           "module": "podpac.core.algorithm.stats.Variance",
           "attrs": {
               "dims": {
                   "type": "DimsTrait",
                   "type_str": "<podpac.core.utils.DimsTrait object at 0x7ffa36c77c10>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "YearSubstituteCoordinates": {
           "help": "<div class=\"document\">\n\n\n<p>No help text to display.</p>\n</div>\n",
           "module": "podpac.core.algorithm.coord_select.YearSubstituteCoordinates",
           "attrs": {
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "NodeTrait",
                   "type_str": "<podpac.core.utils.NodeTrait object at 0x7ffa36cdee50>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": {
                       "test": "info"
                   }
               },
               "substitute_eval_coords": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa2f076160>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               },
               "year": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa2f0762e0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               }
           },
           "style": {}
       }
   },
   "compositor": {
       "OrderedCompositor": {
           "help": "<div class=\"document\">\n\n\n<p>Compositor that combines sources based on their order in self.sources.</p>\n<p>The sources should generally be interpolated before being composited (i.e. not raw datasources).</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>sources</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">list</span></dt>\n<dd><p class=\"first last\">Source nodes, in order of preference. Later sources are only used where earlier sources do not provide data.</p>\n</dd>\n<dt><strong>source_coordinates</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\"><a href=\"#id1\"><span class=\"problematic\" id=\"id2\">:class:`podpac.Coordinates`</span></a></span></dt>\n<dd><div class=\"first system-message\" id=\"id1\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 24); <em><a href=\"#id2\">backlink</a></em></p>\n<p>Unknown interpreted text role &quot;class&quot;.</p>\n</div>\n<p class=\"last\">Coordinates that make each source unique. Must the same size as <tt class=\"docutils literal\">sources</tt> and single-dimensional. Optional.</p>\n</dd>\n<dt><strong>multithreading</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">bool, optional</span></dt>\n<dd><p class=\"first last\">Default is True. If True, will always evaluate the compositor in serial, ignoring any MULTITHREADING settings</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.compositor.ordered_compositor.OrderedCompositor",
           "attrs": {
               "dims": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14190>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source_coordinates": {
                   "type": "Coordinates",
                   "type_str": "<class 'podpac.core.coordinates.coordinates.Coordinates'>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "sources": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14040>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               }
           },
           "style": {}
       },
       "TileCompositor": {
           "help": "<div class=\"document\">\n\n\n<p>No help text to display.</p>\n</div>\n",
           "module": "podpac.core.compositor.tile_compositor.TileCompositor",
           "attrs": {
               "dims": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14190>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source_coordinates": {
                   "type": "Coordinates",
                   "type_str": "<class 'podpac.core.coordinates.coordinates.Coordinates'>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "sources": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14040>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "TileCompositorRaw": {
           "help": "<div class=\"document\">\n\n\n<p>Compositor that combines tiled sources.</p>\n<p>The requested data does not need to be interpolated by the sources before being composited</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>sources</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">list</span></dt>\n<dd><p class=\"first last\">Source nodes (tiles). The sources should not be overlapping.</p>\n</dd>\n<dt><strong>source_coordinates</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\"><a href=\"#id1\"><span class=\"problematic\" id=\"id2\">:class:`podpac.Coordinates`</span></a></span></dt>\n<dd><div class=\"first system-message\" id=\"id1\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 24); <em><a href=\"#id2\">backlink</a></em></p>\n<p>Unknown interpreted text role &quot;class&quot;.</p>\n</div>\n<p class=\"last\">Coordinates that make each source unique. Must the same size as <tt class=\"docutils literal\">sources</tt> and single-dimensional. Optional.</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.core.compositor.tile_compositor.TileCompositorRaw",
           "attrs": {
               "dims": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14190>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source_coordinates": {
                   "type": "Coordinates",
                   "type_str": "<class 'podpac.core.coordinates.coordinates.Coordinates'>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "sources": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14040>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       }
   },
   "datalib": {
       "COSMOSStations": {
           "help": "<div class=\"document\">\n\n\n<p>No help text to display.</p>\n</div>\n",
           "module": "podpac.datalib.cosmos_stations.COSMOSStations",
           "attrs": {
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": {
                       "method": "nearest",
                       "params": {
                           "use_selector": false,
                           "remove_nan": false,
                           "time_scale": "1,M"
                       }
                   },
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {
               "colormap": "jet"
           }
       },
       "EGI": {
           "help": "<div class=\"document\">\n\n\n<p>PODPAC DataSource node to access the NASA EGI Programmatic Interface\n<a class=\"reference external\" href=\"https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters\">https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters</a></p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Parameters:</th><td class=\"field-body\"><dl class=\"first docutils\">\n<dt><strong>short_name</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">Specifies the short name of the collection used to find granules for the coverage requested. Required.\nSee <a class=\"reference external\" href=\"https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters\">https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters</a></p>\n</dd>\n<dt><strong>data_key</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">Path to the subset data layer or group for Parameter Subsetting. Required.\nEquivalent to &quot;Coverage&quot; paramter described in\n<a class=\"reference external\" href=\"https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters\">https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters</a></p>\n</dd>\n<dt><strong>lat_key</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">Key for latitude data in endpoint HDF-5 file. Required.</p>\n</dd>\n<dt><strong>lon_key</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">Key for longitude data in endpoint HDF-5 file. Required.</p>\n</dd>\n<dt><strong>min_bounds_span: dict, optional</strong></dt>\n<dd><p class=\"first last\">Default is {}. When specified, gives the minimum bounds that will be used for a coordinate in the EGI query, so\nit works properly. If a user specified a lat,lon point, the EGI query may fail since the min/max values for\nlat/lon are the same. When specified, these bounds will be padded by the following for latitude (as an example):\n[lat - min_bounds_span['lat'] / 2, lat + min_bounds_span['lat'] / 2]</p>\n</dd>\n<dt><strong>base_url</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first\">URL for EGI data endpoint.\nDefaults to <a href=\"#id1\"><span class=\"problematic\" id=\"id2\">:str:`BASE_URL`</span></a>\nSee <a class=\"reference external\" href=\"https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#egiparameters\">https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#egiparameters</a></p>\n<div class=\"last system-message\" id=\"id1\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 30); <em><a href=\"#id2\">backlink</a></em></p>\n<p>Unknown interpreted text role &quot;str&quot;.</p>\n</div>\n</dd>\n<dt><strong>page_size</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">int, optional</span></dt>\n<dd><p class=\"first last\">Number of granules returned from CMR per HTTP call. Defaults to 20.\nSee <a class=\"reference external\" href=\"https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters\">https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters</a></p>\n</dd>\n<dt><strong>updated_since</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first last\">Can be used to find granules recently updated in CMR. Optional.\nSee <a class=\"reference external\" href=\"https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters\">https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs#cmrparameters</a></p>\n</dd>\n<dt><strong>version</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, int, optional</span></dt>\n<dd><p class=\"first last\">Data product version. Optional.\nNumber input will be cast into a 3 character string NNN, i.e. 3 -&gt; &quot;003&quot;</p>\n</dd>\n<dt><strong>token</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first\">EGI Token from authentication process.\nSee <a class=\"reference external\" href=\"https://wiki.earthdata.nasa.gov/display/CMR/Creating+a+Token+Common\">https://wiki.earthdata.nasa.gov/display/CMR/Creating+a+Token+Common</a>\nIf undefined, the node will look for a token under the setting key &quot;<a class=\"reference external\" href=\"mailto:token&#64;urs.earthdata.nasa.gov\">token&#64;urs.earthdata.nasa.gov</a>&quot;.\nIf this setting is not defined, the node will attempt to generate a token using\n<a href=\"#id3\"><span class=\"problematic\" id=\"id4\">:attr:`self.username`</span></a> and <a href=\"#id5\"><span class=\"problematic\" id=\"id6\">:attr:`self.password`</span></a></p>\n<div class=\"system-message\" id=\"id3\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 47); <em><a href=\"#id4\">backlink</a></em></p>\n<p>Unknown interpreted text role &quot;attr&quot;.</p>\n</div>\n<div class=\"last system-message\" id=\"id5\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 47); <em><a href=\"#id6\">backlink</a></em></p>\n<p>Unknown interpreted text role &quot;attr&quot;.</p>\n</div>\n</dd>\n<dt><strong>username</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first last\">Earthdata username (<a class=\"reference external\" href=\"https://urs.earthdata.nasa.gov/\">https://urs.earthdata.nasa.gov/</a>)\nIf undefined, node will look for a username under setting key &quot;<a class=\"reference external\" href=\"mailto:username&#64;urs.earthdata.nasa.gov\">username&#64;urs.earthdata.nasa.gov</a>&quot;</p>\n</dd>\n<dt><strong>password</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first last\">Earthdata password (<a class=\"reference external\" href=\"https://urs.earthdata.nasa.gov/\">https://urs.earthdata.nasa.gov/</a>)\nIf undefined, node will look for a password under setting key &quot;<a class=\"reference external\" href=\"mailto:password&#64;urs.earthdata.nasa.gov\">password&#64;urs.earthdata.nasa.gov</a>&quot;</p>\n</dd>\n</dl>\n</td>\n</tr>\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>data</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\"><a href=\"#id7\"><span class=\"problematic\" id=\"id8\">:class:`podpac.UnitsDataArray`</span></a></span></dt>\n<dd><div class=\"first system-message\" id=\"id7\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 75); <em><a href=\"#id8\">backlink</a></em></p>\n<p>Unknown interpreted text role &quot;class&quot;.</p>\n</div>\n<p class=\"last\">The data array compiled from downloaded EGI data</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.datalib.egi.EGI",
           "attrs": {
               "base_url": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a1bd00>",
                   "values": null,
                   "default": "https://n5eil01u.ecs.nsidc.org/egi/request",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "coordinate_index_type": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa2729e5b0>",
                   "values": [
                       "slice",
                       "numpy",
                       "xarray"
                   ],
                   "default": "numpy",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "data_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a1bd60>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "lat_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a1bd90>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "lon_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a1bdc0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "min_bounds_span": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa26a1be50>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2729e4c0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "short_name": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a1bd30>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "time_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a1bdf0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               },
               "version": {
                   "type": [
                       "Unicode",
                       "Int"
                   ],
                   "type_str": "Union",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "username": {},
               "password": {}
           },
           "style": {}
       },
       "GFS": {
           "help": "<div class=\"document\">\n\n\n<p>Composited and interpolated GFS data from S3</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>parameter</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">parameter, e.g. 'SOIM'.</p>\n</dd>\n<dt><strong>level</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">source depth, e.g. &quot;0-10 m DPTH&quot;</p>\n</dd>\n<dt><strong>date</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">source date in '%Y%m%d' format, e.g. '20200130'</p>\n</dd>\n<dt><strong>hour</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">source hour, e.g. '1200'</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.datalib.gfs.GFS",
           "attrs": {
               "anon": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa27290400>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "date": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a2c850>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "dims": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14190>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "hour": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a2c880>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "level": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a2c820>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "parameter": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a2c7f0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "Landsat8": {
           "help": "<div class=\"document\">\n\n\n<p>Landsat 8 on AWS OpenData\n<a class=\"reference external\" href=\"https://registry.opendata.aws/landsat-8/\">https://registry.opendata.aws/landsat-8/</a></p>\n<p>Leverages sat-utils (<a class=\"reference external\" href=\"https://github.com/sat-utils\">https://github.com/sat-utils</a>) developed by Development Seed</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Parameters:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>asset</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first last\">Asset to download from the satellite image.\nFor Landsat8, this includes: 'B01','B02','B03','B04','B05','B06','B07','B08','B09','B10','B11','B12'\nThe asset must be a band name or a common extension name, see <a class=\"reference external\" href=\"https://github.com/radiantearth/stac-spec/tree/master/extensions/eo\">https://github.com/radiantearth/stac-spec/tree/master/extensions/eo</a>\nSee also the Assets section of this tutorial: <a class=\"reference external\" href=\"https://github.com/sat-utils/sat-stac/blob/master/tutorial-2.ipynb\">https://github.com/sat-utils/sat-stac/blob/master/tutorial-2.ipynb</a></p>\n</dd>\n<dt><strong>query</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">dict, optional</span></dt>\n<dd><p class=\"first last\">Dictionary of properties to query on, supports eq, lt, gt, lte, gte\nPassed through to the sat-search module.\nSee <a class=\"reference external\" href=\"https://github.com/sat-utils/sat-search/blob/master/tutorial-1.ipynb\">https://github.com/sat-utils/sat-search/blob/master/tutorial-1.ipynb</a>\nDefaults to None</p>\n</dd>\n<dt><strong>min_bounds_span</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">dict, optional</span></dt>\n<dd><p class=\"first last\">Default is {}. When specified, gives the minimum bounds that will be used for a coordinate in the query, so\nit works properly. If a user specified a lat, lon point, the query may fail since the min/max values for\nlat/lon are the same. When specified, these bounds will be padded by the following for latitude (as an example):\n[lat - min_bounds_span['lat'] / 2, lat + min_bounds_span['lat'] / 2]</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.datalib.satutils.Landsat8",
           "attrs": {
               "asset": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a37c10>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "dims": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14190>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": {
                       "method": "nearest",
                       "params": {
                           "respect_bounds": false
                       }
                   },
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "min_bounds_span": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa26a37ca0>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "query": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa26a37c40>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "source_coordinates": {
                   "type": "Coordinates",
                   "type_str": "<class 'podpac.core.coordinates.coordinates.Coordinates'>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "sources": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14040>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "stac_api_url": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a37bb0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "MODIS": {
           "help": "<div class=\"document\">\n\n\n<p>No help text to display.</p>\n</div>\n",
           "module": "podpac.datalib.modis_pds.MODIS",
           "attrs": {
               "data_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a375e0>",
                   "values": null,
                   "default": "",
                   "help": "data to retrieve (varies by product)",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "product": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa26a375b0>",
                   "values": [
                       "MCD43A4.006",
                       "MOD09GA.006",
                       "MYD09GA.006",
                       "MOD09GQ.006",
                       "MYD09GQ.006"
                   ],
                   "default": null,
                   "help": "MODIS product ID",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "source_coordinates": {
                   "type": "Coordinates",
                   "type_str": "<class 'podpac.core.coordinates.coordinates.Coordinates'>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "sources": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14040>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "SMAP": {
           "help": "<div class=\"document\">\n\n\n<p>SMAP Node. For more information about SMAP, see <a class=\"reference external\" href=\"https://nsidc.org/data/smap\">https://nsidc.org/data/smap</a></p>\n<p>SMAP interface using the EGI Data Portal\n<a class=\"reference external\" href=\"https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs\">https://developer.earthdata.nasa.gov/sdps/programmatic-access-docs</a>\nwith the base URL: <a class=\"reference external\" href=\"https://n5eil01u.ecs.nsidc.org/egi/request\">https://n5eil01u.ecs.nsidc.org/egi/request</a></p>\n<p>To access data from this node, an Earthdata login is required. This can either be specified when\ncreating the node:\n<tt class=\"docutils literal\">`python\nsmap = <span class=\"pre\">SMAP(username=&quot;your_user_name&quot;,</span> <span class=\"pre\">password=&quot;your_password&quot;)</span>\n`</tt>\nOR you can set the following PODPAC settings:\n<tt class=\"docutils literal\">`python\n<span class=\"pre\">podpac.settings[&quot;username&#64;urs.earthdata.nasa.gov&quot;]</span> = &quot;your_user_name&quot;\n<span class=\"pre\">podpac.settings[&quot;password&#64;urs.earthdata.nasa.gov&quot;]</span> = &quot;your_password&quot;\npodpac.settings.save()&nbsp; # To have this information persist\nsmap = SMAP()\n`</tt></p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Parameters:</th><td class=\"field-body\"><dl class=\"first docutils\">\n<dt><strong>product</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first\">One of the <a href=\"#id1\"><span class=\"problematic\" id=\"id2\">:list:`SMAP_PRODUCTS`</span></a> strings</p>\n<div class=\"last system-message\" id=\"id1\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 24); <em><a href=\"#id2\">backlink</a></em></p>\n<p>Unknown interpreted text role &quot;list&quot;.</p>\n</div>\n</dd>\n<dt><strong>check_quality_flags</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">bool, optional</span></dt>\n<dd><p class=\"first last\">Default is True. If True, data will be filtered based on the SMAP data quality flag, and only\nhigh quality data is returned.</p>\n</dd>\n<dt><strong>data_key</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first last\">Default will return soil moisture and is set automatically based on the product selected. Other\npossible data keys can be found</p>\n</dd>\n</dl>\n</td>\n</tr>\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>nan_vals</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">list</span></dt>\n<dd><p class=\"first last\">Nan values in SMAP data</p>\n</dd>\n<dt><strong>username</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first last\">Earthdata username (<a class=\"reference external\" href=\"https://urs.earthdata.nasa.gov/\">https://urs.earthdata.nasa.gov/</a>)\nIf undefined, node will look for a username under setting key &quot;<a class=\"reference external\" href=\"mailto:username&#64;urs.earthdata.nasa.gov\">username&#64;urs.earthdata.nasa.gov</a>&quot;</p>\n</dd>\n<dt><strong>password</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first last\">Earthdata password (<a class=\"reference external\" href=\"https://urs.earthdata.nasa.gov/\">https://urs.earthdata.nasa.gov/</a>)\nIf undefined, node will look for a password under setting key &quot;<a class=\"reference external\" href=\"mailto:password&#64;urs.earthdata.nasa.gov\">password&#64;urs.earthdata.nasa.gov</a>&quot;</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.datalib.smap_egi.SMAP",
           "attrs": {
               "base_url": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a42700>",
                   "values": null,
                   "default": "https://n5eil01u.ecs.nsidc.org/egi/request",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "check_quality_flags": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26a42310>",
                   "values": null,
                   "default": true,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "coordinate_index_type": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa2729e5b0>",
                   "values": [
                       "slice",
                       "numpy",
                       "xarray"
                   ],
                   "default": "numpy",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "data_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a42370>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "min_bounds_span": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa26a42340>",
                   "values": null,
                   "default": {
                       "lon": 0.3,
                       "lat": 0.3,
                       "time": "3,h"
                   },
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "product": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa26a423a0>",
                   "values": [
                       "SPL4SMAU",
                       "SPL4SMGP",
                       "SPL4SMLM",
                       "SPL3SMAP",
                       "SPL3SMA",
                       "SPL3SMP_AM",
                       "SPL3SMP_PM",
                       "SPL3SMP_E_AM",
                       "SPL3SMP_E_PM"
                   ],
                   "default": "SPL4SMAU",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "time_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a1bdf0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               },
               "username": {},
               "password": {}
           },
           "style": {}
       },
       "Sentinel2": {
           "help": "<div class=\"document\">\n\n\n<p>Sentinel 2 on AWS OpenData\n<a class=\"reference external\" href=\"https://registry.opendata.aws/sentinel-2/\">https://registry.opendata.aws/sentinel-2/</a></p>\n<p>Leverages sat-utils (<a class=\"reference external\" href=\"https://github.com/sat-utils\">https://github.com/sat-utils</a>) developed by Development Seed.</p>\n<p>Note this data source requires the requester to pay, so you must set podpac settings[&quot;AWS_REQUESTER_PAYS&quot;] = True</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Parameters:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>asset</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, optional</span></dt>\n<dd><p class=\"first last\">Asset to download from the satellite image.\nFor Sentinel2, this includes: 'tki','B01','B02','B03','B04','B05','B06','B07','B08','B8A','B09','B10','B11','B12\nThe asset must be a band name or a common extension name, see <a class=\"reference external\" href=\"https://github.com/radiantearth/stac-spec/tree/master/extensions/eo\">https://github.com/radiantearth/stac-spec/tree/master/extensions/eo</a>\nSee also the Assets section of this tutorial: <a class=\"reference external\" href=\"https://github.com/sat-utils/sat-stac/blob/master/tutorial-2.ipynb\">https://github.com/sat-utils/sat-stac/blob/master/tutorial-2.ipynb</a></p>\n</dd>\n<dt><strong>query</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">dict, optional</span></dt>\n<dd><p class=\"first last\">Dictionary of properties to query on, supports eq, lt, gt, lte, gte\nPassed through to the sat-search module.\nSee <a class=\"reference external\" href=\"https://github.com/sat-utils/sat-search/blob/master/tutorial-1.ipynb\">https://github.com/sat-utils/sat-search/blob/master/tutorial-1.ipynb</a>\nDefaults to None</p>\n</dd>\n<dt><strong>min_bounds_span</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">dict, optional</span></dt>\n<dd><p class=\"first last\">Default is {}. When specified, gives the minimum bounds that will be used for a coordinate in the query, so\nit works properly. If a user specified a lat, lon point, the query may fail since the min/max values for\nlat/lon are the same. When specified, these bounds will be padded by the following for latitude (as an example):\n[lat - min_bounds_span['lat'] / 2, lat + min_bounds_span['lat'] / 2]</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.datalib.satutils.Sentinel2",
           "attrs": {
               "anon": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa26a37c70>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "asset": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a37c10>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "dims": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14190>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": {
                       "method": "nearest",
                       "params": {
                           "respect_bounds": false
                       }
                   },
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "min_bounds_span": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa26a37ca0>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "query": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa26a37c40>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "source_coordinates": {
                   "type": "Coordinates",
                   "type_str": "<class 'podpac.core.coordinates.coordinates.Coordinates'>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "sources": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14040>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "stac_api_url": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a37bb0>",
                   "values": null,
                   "default": "",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "SoilSCAPE20min": {
           "help": "<div class=\"document\">\n\n\n<p>SoilSCAPE 20min soil moisture data for an entire site, with interpolation.</p>\n</div>\n",
           "module": "podpac.datalib.soilscape.SoilSCAPE20min",
           "attrs": {
               "data_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa9c6e9040>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "dims": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa26d14190>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "exclude": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa9c6d0f40>",
                   "values": null,
                   "default": [
                       1,
                       2,
                       3,
                       4
                   ],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "site": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa9c6d0f10>",
                   "values": [
                       "BLMLand1STonzi_CA",
                       "BLMLand2STonzi_CA",
                       "BLMLand3NTonzi_CA",
                       "Canton_OK",
                       "Kendall_AZ",
                       "LuckyHills_AZ",
                       "MatthaeiGardens_MI",
                       "NewHoganLakeN_CA",
                       "NewHoganLakeS_CA",
                       "TerradOro_CA",
                       "TonziRanch_CA",
                       "Vaira_CA"
                   ],
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               }
           },
           "style": {}
       },
       "TerrainTiles": {
           "help": "<div class=\"document\">\n\n\n<p>Terrain Tiles gridded elevation tiles data library</p>\n<p>Hosted on AWS S3\n<a class=\"reference external\" href=\"https://registry.opendata.aws/terrain-tiles/\">https://registry.opendata.aws/terrain-tiles/</a></p>\n<dl class=\"docutils\">\n<dt>Description</dt>\n<dd>Gridded elevation tiles</dd>\n<dt>Resource type</dt>\n<dd>S3 Bucket</dd>\n<dt>Amazon Resource Name (ARN)</dt>\n<dd>arn:aws:s3:::elevation-tiles-prod</dd>\n<dt>AWS Region</dt>\n<dd>us-east-1</dd>\n</dl>\n<p>Documentation: <a class=\"reference external\" href=\"https://mapzen.com/documentation/terrain-tiles/\">https://mapzen.com/documentation/terrain-tiles/</a></p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Parameters:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>zoom</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">int</span></dt>\n<dd><p class=\"first last\">Zoom level of tiles. Defaults to 6.</p>\n</dd>\n<dt><strong>tile_format</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first\">One of ['geotiff', 'terrarium', 'normal']. Defaults to 'geotiff'\nPODPAC node can only evaluate 'geotiff' formats.\nOther tile_formats can be specified for <a href=\"#id1\"><span class=\"problematic\" id=\"id2\">:meth:`download`</span></a>\nNo support for 'skadi' formats at this time.</p>\n<div class=\"last system-message\" id=\"id1\">\n<p class=\"system-message-title\">System Message: ERROR/3 (<tt class=\"docutils\">&lt;string&gt;</tt>, line 24); <em><a href=\"#id2\">backlink</a></em></p>\n<p>Unknown interpreted text role &quot;meth&quot;.</p>\n</div>\n</dd>\n<dt><strong>bucket</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">Bucket of the terrain tiles.\nDefaults to 'elevation-tiles-prod'</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.datalib.terraintiles.TerrainTiles",
           "attrs": {
               "bucket": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa26a42fd0>",
                   "values": null,
                   "default": "elevation-tiles-prod",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source_coordinates": {
                   "type": "Coordinates",
                   "type_str": "<class 'podpac.core.coordinates.coordinates.Coordinates'>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "tile_format": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa26a42f40>",
                   "values": [
                       "geotiff",
                       "terrarium",
                       "normal"
                   ],
                   "default": "geotiff",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "urls": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa9c6d0070>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "zoom": {
                   "type": "Int",
                   "type_str": "<traitlets.traitlets.Int object at 0x7ffa26a42ee0>",
                   "values": null,
                   "default": -1,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               }
           },
           "style": {}
       },
       "WeatherCitizen": {
           "help": "<div class=\"document\">\n\n\n<p>DataSource to handle WeatherCitizen data</p>\n<table class=\"docutils field-list\" frame=\"void\" rules=\"none\">\n<col class=\"field-name\" />\n<col class=\"field-body\" />\n<tbody valign=\"top\">\n<tr class=\"field\"><th class=\"field-name\">Attributes:</th><td class=\"field-body\"><dl class=\"first last docutils\">\n<dt><strong>source</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str</span></dt>\n<dd><p class=\"first last\">Collection (database) to pull data from.\nDefaults to &quot;geosensors&quot; which is the primary data collection</p>\n</dd>\n<dt><strong>data_key</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, int</span></dt>\n<dd><p class=\"first last\">Data key of interest, default &quot;properties.pressure&quot;</p>\n</dd>\n<dt><strong>uuid</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, list(str), options</span></dt>\n<dd><p class=\"first last\">String or list of strings to filter data by uuid</p>\n</dd>\n<dt><strong>device</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">str, list(str), ObjectId, list(ObjectId), optional</span></dt>\n<dd><p class=\"first last\">String or list of strings to filter data by device object id</p>\n</dd>\n<dt><strong>version</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">string, list(str), optional</span></dt>\n<dd><p class=\"first last\">String or list of strings to filter data to filter data by WeatherCitizen version</p>\n</dd>\n<dt><strong>query</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">dict, optional</span></dt>\n<dd><p class=\"first last\">Arbitrary pymongo query to apply to data.\nNote that certain fields in this query may be overriden if other keyword arguments are specified</p>\n</dd>\n<dt><strong>verbose</strong> <span class=\"classifier-delimiter\">:</span> <span class=\"classifier\">bool, optional</span></dt>\n<dd><p class=\"first last\">Display log messages or progress</p>\n</dd>\n</dl>\n</td>\n</tr>\n</tbody>\n</table>\n</div>\n",
           "module": "podpac.datalib.weathercitizen.WeatherCitizen",
           "attrs": {
               "boundary": {
                   "type": "Dict",
                   "type_str": "<traitlets.traitlets.Dict object at 0x7ffa2729e550>",
                   "values": null,
                   "default": {},
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": {
                       "key": "NoneType",
                       "value": "NoneType"
                   }
               },
               "coordinate_index_type": {
                   "type": "Enum",
                   "type_str": "<traitlets.traitlets.Enum object at 0x7ffa2729e5b0>",
                   "values": [
                       "slice",
                       "numpy",
                       "xarray"
                   ],
                   "default": "numpy",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "data_key": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa9c6d03a0>",
                   "values": null,
                   "default": "properties.pressure",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "device": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa9c6d0400>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "interpolation": {
                   "type": "InterpolationTrait",
                   "type_str": "<podpac.core.interpolation.interpolation_manager.InterpolationTrait object at 0x7ffa27283580>",
                   "values": null,
                   "default": "nearest",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_val": {
                   "type": "Any",
                   "type_str": "<traitlets.traitlets.Any object at 0x7ffa2729e520>",
                   "values": null,
                   "default": "nan",
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "nan_vals": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa2729e4c0>",
                   "values": null,
                   "default": [],
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "output": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2df0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "outputs": {
                   "type": "List",
                   "type_str": "<traitlets.traitlets.List object at 0x7ffa3702e6d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "override_limit": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa9c6d04c0>",
                   "values": null,
                   "default": false,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "query": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa9c6d0460>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "source": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa9c6d0370>",
                   "values": null,
                   "default": "geosensors",
                   "help": "",
                   "required": true,
                   "hidden": false,
                   "schema": null
               },
               "units": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa36cd2dc0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": true,
                   "schema": null
               },
               "uuid": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa9c6d03d0>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "verbose": {
                   "type": "Bool",
                   "type_str": "<traitlets.traitlets.Bool object at 0x7ffa9c6d0490>",
                   "values": null,
                   "default": true,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               },
               "version": {
                   "type": "Unicode",
                   "type_str": "<traitlets.traitlets.Unicode object at 0x7ffa9c6d0430>",
                   "values": null,
                   "default": null,
                   "help": "",
                   "required": false,
                   "hidden": false,
                   "schema": null
               }
           },
           "style": {}
       }
   }
}