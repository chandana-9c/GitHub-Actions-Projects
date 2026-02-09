#FROM node:18

#WORKDIR /app

# copy package*.json ./
#COPY package*.json ./
#RUN npm install

# copy . .
#COPY . ./
#EXPOSE 3000
#CMD ["npm", "start"]


FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy all remaining files
COPY . .  # copy all files from github-cicd-webapp

EXPOSE 3000
#CMD ["npm", "start"]
CMD ["node", "index.js"]  # render

