from flask.views import MethodView
from flask import request, Response
from .common import get_filter, filter_object_list
import jsonpickle, json

class Project(object):
    def __init__(self, id, name, env,infra_arch,git_url,tenant_id,project_id):
        self.id = id
        self.name = name
        self.env = env
        self.infra_arch = infra_arch
        self.git_url = git_url
        self.tenant_id = tenant_id
        self.project_id = project_id

projects = []

projects.append(Project(0, "P&G", "dev", "vm", "http://xxxxxxxxx/xxx.git", 0, 0))
projects.append(Project(1, "Loreal", "prd", "sks", "http://xxxxxxxxx/loreal.git", 0, 1))


class ProjectView(MethodView):
    def __init__(self):
        self.data = projects
        
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