To create and trust a new development certificate:
`dotnet dev-certs https -t`

Dont forget to run `npm install` before first 'npm run dev' :)

Test API at local address https://localhost:5001/api/Products

To create a new client build run next command from client folder:
/>npm run build

The output folder is defined in vite.config.ts in section "build".

To build the api run:
/>dotnet build
/>dotnet watch

To publish the api:
/>dotnet publish -c Release -o ./bin/Publish


Used tools:
Transform json to typescript:
https://transform.tools/json-to-typescript


