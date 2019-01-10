docker build -t rnwolfe/multi-client:latest -t rnwolfe/multi-client:$GIT_SHA ./client/Dockerfile ./client
docker build -t rnwolfe/multi-server:latest -t rnwolfe/multi-server:$GIT_SHA ./server/Dockerfile ./server
docker build -t rnwolfe/multi-worker:latest -t rnwolfe/multi-worker:$GIT_SHA ./worker/Dockerfile ./worker

docker push rnwolfe/multi-client:latest
docker push rnwolfe/multi-server:latest
docker push rnwolfe/multi-worker:latest

docker push rnwolfe/multi-client:$GIT_SHA
docker push rnwolfe/multi-server:$GIT_SHA
docker push rnwolfe/multi-worker:$GIT_SHA

kubectl apply -f k8s/
kubectl set image deployments/client-deployment client=rnwolfe/multi-client:$GIT_SHA
kubectl set image deployments/server-deployment server=rnwolfe/multi-server:$GIT_SHA
kubectl set image deployments/worker-deployment worker=rnwolfe/multi-worker:$GIT_SHA