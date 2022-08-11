import sys
import os
import importlib
import json
from celery import Celery

file_path = os.path.dirname(__file__)
popoperator_path = "{}/{}".format(file_path, "../../popoperator/popoperator")
sys.path.append(popoperator_path)


if __name__ == '__main__':
    from celery_app import app
    result = app.tasks['bash'].delay(bash_command="ls /")
    stdout = result.get(timeout=1)
    print(stdout.get('result'))
