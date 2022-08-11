import sys
import os
import importlib
from celery import Celery

app = Celery(
    backend="redis://127.0.0.1:6379/0",
    broker="redis://127.0.0.1:6379/1",
)


file_path = os.path.dirname(__file__)
popoperator_path = "{}/{}".format(file_path, "../../popoperator/popoperator")
sys.path.append(popoperator_path)

for item in os.listdir(popoperator_path):
    item_path = "{}/{}".format(popoperator_path, item)
    if os.path.isdir(item_path):
        module = importlib.import_module(item,)
        if module.__name__ != 'base':
            print(module.__name__)
            app.register_task(module.operator)


if __name__ == '__main__':        
    app.worker_main(
        [
            'worker',
            '-E',
            '--loglevel=INFO',
        ]
    )