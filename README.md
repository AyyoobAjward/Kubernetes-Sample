# Deploying Employee Service on Minikube

## Steps

1. **Save the Docker image as a .tar file:**
   ```sh
   docker image save -o employee-service.tar employee-service
   ```

2. **Load the Docker image into Minikube:**
   ```sh
   minikube image load employee-service
   ```

3. **Apply the `employee-service` deployment:**
   ```sh
   kubectl apply -f employee-service
   ```

4. **Get the Minikube IP:**
   ```sh
   minikube ip
   ```

5. **Use `curl` to check the service:**
   ```sh
   curl <minikube-ip>:<node-port>
   ```
   Replace `<minikube-ip>` with the IP obtained from step 4 and `<node-port>` with the appropriate port number.

