from flask import request, Response
import json, jsonpickle
from flask.views import MethodView

def get_filter(request):
    filter = request.args.get('filter')
    if filter:
        filter = json.loads(filter)
    return filter

def filter_object_list(filter, obj_list):
    result_obj = []
    if isinstance(filter, dict):
        key = list(filter.keys())[0]
        value = filter[key]
        for obj in obj_list:
            if hasattr(obj, key):
                if getattr(obj, key) == value:
                    result_obj.append(obj)
        return result_obj
    
class PopMethodView(MethodView):
    def __init__(self, data):
        self.data = data
        
    def get(self, user_id=None):
        filter = get_filter(request)
        resp_data = []
        if filter:
            resp_data = jsonpickle.encode(filter_object_list(filter, self.data))
        else:
            resp_data = jsonpickle.encode(self.data)
            print(resp_data, type(resp_data), type(json.loads(resp_data)))
        resp = Response(json.dumps(json.loads(resp_data)))
        resp.headers["Access-Control-Expose-Headers"] = "*"
        resp.headers['Content-Range'] = len(resp_data)
        return resp
    
    def post(self):
        return "created"