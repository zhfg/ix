class Request(object):
    def __init__(self, id, name, location):
        self.id = id
        self.name = name
        self.location = location


requests = []

requests.append(Request(0, "P&G", "GuangZhou"))
requests.append(Request(1, "Loreal", "Shanghai"))
requests.append(Request(2, "JBS", "Create a VM"))