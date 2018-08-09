![reclame-aqui-logo](https://www.reclameaqui.com.br/images/reclame-aqui-logo.4d0b9798.png)

## Getting Started

### Prerequisities

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)

### Installing

``` bash
$ npm install
```
### How to use

#### Build Setup

After installing the dependencies, you must rename the .env.sample file to .env. Then, replace the .env values with your production variables.

It's necessary to activate the [Geocoding API](https://console.cloud.google.com/apis/library/geocoding-backend.googleapis.com).

Also, a [Google Geocoding API Credential](https://console.cloud.google.com/apis/credentials) is required in order to correctly use this application.

There're two requests created, one to ingest complaints and another to find complaints by city, addres or even building name.
Virtually, anything that Google can find the Geocoding latitude and longitude.

##### GET: api/v1/complaint?address=rua%20elvira%20ferraz&distance=1000

##### POST: api/v1/complaint
```javascript
{
    "title": "Meu produto não foi entregue",
    "description": "Olá, meu produto não foi entregue na data combinada. Estou extremamente desapontado com a empresa! Gostaria de chegar a uma solução pacífica, mas a empresa não demonstra interesse em me atender",
    "location": {
        "type": "Point",
        "coordinates": [
            -23.5946175,
            -46.6819188
        ]
    },
    "company": "Polishop"
}

```

#### Releases

For the versions available, see the [tags on this repository](https://github.com/kosicki123/ra-backend-test/tags) and [Changelog](./CHANGELOG.md) file.

## Contributors

See also the list of [contributors](https://github.com/kosicki123/ra-backend-test/graphs/contributors) who participated in this project.
