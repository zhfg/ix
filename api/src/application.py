from unittest import result
from flask.views import MethodView
import jsonpickle, json
from flask import request, Response

class Application(object):
    def __init__(
        self, 
        id, 
        app_fullname,
        app_shortname,
        bizuser_mail,
        devuser_mail,
        devuser_group,
        app_type,
        app_description,
        app_status,
        app_id,
        project_id):
        self.id = id
        self.app_fullname=app_fullname
        self.app_shortname=app_shortname
        self.bizuser_mail=bizuser_mail
        self.devuser_mail=devuser_mail
        self.devuser_group=devuser_group
        self.app_type=app_type
        self.app_description=app_description
        self.app_status=app_status
        self.app_id=app_id
        self.project_id=project_id


applications = []

applications.append(Application(0, "CMP", "CMP", "admin@cmp.com", "dev@cmp.com", "dev", "app_type", "app description", 1, 0, 0))
applications.append(Application(1, "DEVOPS", "DEVOPS", "admin@devops.com", "dev@devops.com", "dev", "app_type", "devops description", 1, 1, 0))
applications.append(Application(1, "DEVOPS-1", "DEVOPS-1", "admin@devops-1.com", "dev@devops-1.com", "dev", "app_type", "devops-1 description", 1, 1, 1))

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

class ApplicationView(MethodView):
    def __init__(self):
        self.data = applications
        
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
    