echo "Fetching latest changes from git..."
git pull

echo "Trying to stop old container"
docker stop my-restaurant-graph
echo "Deleting old container"
docker container rm my-restaurant-graph --force
echo "Deleting old image"
docker rmi dnieln7/my-restaurant-graph
echo "Creating new image"
docker build . -t dnieln7/my-restaurant-graph
echo "Creating new container"
docker run -d -p 1000:10000 --name my-restaurant-graph --restart always dnieln7/my-restaurant-graph
echo "Deleting dangling images"
docker image prune --force
