## Full Stack RateApp

### Install packages

```shell
npm i
```

### Setup .env file

```js
# Create a a mongo db cluster in mongo atlas cloud and paste the database uri here
DATABASE_URL=

# Create firebase google authentication IDs (Optional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Create github authentication IDs (Optional)
GITHUB_ID=
GITHUB_SECRET=

# Just put a random next_auth secret here
NEXTAUTH_SECRET=

# Create a free account in cloudinary [https://cloudinary.com] and paste cloud name here

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```
