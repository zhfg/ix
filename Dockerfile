FROM python:3
RUN mkdir /app -pv
COPY ./requirements.txt /app
COPY ./api /app/
RUN python3 -m pip install --no-cache -r /app/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
CMD python3 /app/main.py