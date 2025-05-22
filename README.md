# Mastellini Website

This repository contains the Mastellini website built with Node.js, Express, and EJS.

## Deployment Instructions

### Prerequisites

- Docker and Docker Compose installed on your server
- A domain name pointing to your server (optional for production)
- SSL certificates (optional for HTTPS)

### Local Development

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mastellini
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```

4. Edit the `.env` file with your configuration.

5. Start the application:
   ```
   npm start
   ```

6. Access the application at http://localhost:3001

### Docker Deployment

1. Clone the repository on your server:
   ```
   git clone <repository-url>
   cd mastellini
   ```

2. Create a `.env` file based on `.env.example`:
   ```
   cp .env.example .env
   ```

3. Edit the `.env` file with your production configuration.

4. Build and start the containers:
   ```
   docker-compose up -d
   ```

5. Access the application at http://your-server-ip

### SSL Configuration (HTTPS)

To enable HTTPS:

1. Create an `ssl` directory:
   ```
   mkdir -p ssl
   ```

2. Place your SSL certificate and key in the `ssl` directory:
   - `ssl/certificate.crt`: Your SSL certificate
   - `ssl/private.key`: Your private key

3. Update the Nginx configuration in `nginx.conf` to include SSL:

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       return 301 https://$host$request_uri;
   }

   server {
       listen 443 ssl;
       server_name your-domain.com;

       ssl_certificate /etc/nginx/ssl/certificate.crt;
       ssl_certificate_key /etc/nginx/ssl/private.key;
       ssl_protocols TLSv1.2 TLSv1.3;
       ssl_ciphers HIGH:!aNULL:!MD5;
       ssl_prefer_server_ciphers on;

       # Rest of your configuration...
   }
   ```

4. Restart the Nginx container:
   ```
   docker-compose restart nginx
   ```

### Cloud Deployment

#### AWS Elastic Beanstalk

1. Install the EB CLI:
   ```
   pip install awsebcli
   ```

2. Initialize EB CLI:
   ```
   eb init
   ```

3. Create an environment:
   ```
   eb create
   ```

4. Deploy the application:
   ```
   eb deploy
   ```

#### Digital Ocean App Platform

1. Create a new app on Digital Ocean App Platform.
2. Connect your GitHub repository.
3. Configure the app with the environment variables from `.env.example`.
4. Deploy the app.

#### Google Cloud Run

1. Build the Docker image:
   ```
   docker build -t gcr.io/your-project/mastellini .
   ```

2. Push the image to Google Container Registry:
   ```
   docker push gcr.io/your-project/mastellini
   ```

3. Deploy to Cloud Run:
   ```
   gcloud run deploy mastellini --image gcr.io/your-project/mastellini --platform managed
   ```

## Maintenance

### Updating the Application

1. Pull the latest changes:
   ```
   git pull
   ```

2. Rebuild and restart the containers:
   ```
   docker-compose down
   docker-compose up -d --build
   ```

### Backup

1. Database backup:
   ```
   docker exec -it mastellini-db mysqldump -u root -p your-db-name > backup.sql
   ```

2. Files backup:
   ```
   tar -czvf uploads-backup.tar.gz uploads/
   ```

## Troubleshooting

- **Application not starting**: Check the logs with `docker-compose logs app`
- **Nginx not working**: Check the logs with `docker-compose logs nginx`
- **Database connection issues**: Verify the database credentials in the `.env` file
