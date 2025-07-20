<h1 align="center">WEATHER-API GRAPHQL 🌧️</h1>
<p align="center">
<img src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white" />
<img src="https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
</p>
<p align="center">
Unofficial Weather API Wrapper Easy to use in Graphql. Reference from API BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) <a href="https://data.bmkg.go.id/prakiraan-cuaca/" target="_blank">https://data.bmkg.go.id</a>
</p>
<p>
<img src="./graphql.png" alt="graphql-schema" />
</p>

## Basic Request

###

```shell
curl --location 'https://weather-api.pace11.my.id/' \
--header 'content-type: application/json' \
--data '{"query":"query WeatherForcest($id: String!) {\n  weather(id:$id) {\n    sumber\n    data {\n      cuaca {\n        analysis_date\n        datetime\n        hu\n        image\n        local_datetime\n        t\n        tcc\n        time_index\n        tp\n        utc_datetime\n        vs\n        vs_text\n        wd\n        wd_deg\n        wd_to\n        weather\n        weather_desc\n        weather_desc_en\n        ws\n      },\n      lokasi {\n        adm1\n        adm2\n        adm3\n        adm4\n        desa\n        kecamatan\n        kotkab\n        lat\n        lon\n        provinsi\n        timezone\n        type\n      }\n    }\n    lokasi {\n      adm1\n      adm2\n      adm3\n      adm4\n      desa\n      kecamatan\n      kotkab\n      lat\n      lon\n      provinsi\n      timezone\n    }\n  }\n}\n","variables":{"id":"91.71.03.1008"}}'

```

## Link

- available in Graphql ✴️. If you want to try it, please visit [https://studio.apollographql.com/sandbox/explorer](https://studio.apollographql.com/sandbox/explorer) and then enter the url `https://weather-api.pace11.my.id`
