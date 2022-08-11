from flask import Flask, Response, request
from flask_cors import CORS
from .application import applications, Application, ApplicationView
from .project import projects
from .app_request import requests
import jsonpickle, json
import time

app = Flask(__name__)
CORS(app)
app.config.update(count_healthly=0)
print(app.config.get('count_healthly'))
# global count_healthly
# count_healthly = 0

@app.route("/project")
def project():
    resp = Response(jsonpickle.encode(projects))
    resp.headers["Access-Control-Expose-Headers"] = "*"
    resp.headers['Content-Range'] = len(projects)
    return resp

@app.route("/project/<id>", methods=['GET', 'POST', 'UPDATE', 'PATCH', 'PUT'])
def project_get_one(id):
    print(request.args)
    for project in projects:
        if project.id == int(id):
            resp = Response(jsonpickle.encode(project))
            resp.headers["Access-Control-Expose-Headers"] = "*"
            resp.headers['Content-Range'] = 1
            return resp
    return {}

@app.route("/request")
def app_request():
    resp = Response(jsonpickle.encode(requests))
    resp.headers["Access-Control-Expose-Headers"] = "*"
    resp.headers['Content-Range'] = len(requests)
    return resp

@app.route("/login")
def login():
    resp = Response(jsonpickle.encode(requests))
    resp.headers["Access-Control-Expose-Headers"] = "*"
    resp.headers['Content-Range'] = len(requests)
    return resp

@app.route("/logout")
def logout():
    resp = Response(jsonpickle.encode(requests))
    resp.headers["Access-Control-Expose-Headers"] = "*"
    resp.headers['Content-Range'] = len(requests)
    return resp

@app.route("/healthly")
def healthly():
    app.config.update(count_healthly = app.config.get('count_healthly') + 1)
    if app.config.get('count_healthly') % 10 > 5:
        time.sleep(10)
        return "timeout 10s, count = {}".format(app.config.get('count_healthly'))
    else:
        return "ok, count = {}".format(app.config.get('count_healthly'))

application_view = ApplicationView.as_view("myapplication_view")

app.add_url_rule("/application", view_func=application_view)

if __name__ == '__main__':
    app.run("0.0.0.0", 5000, "--reload")