export default {
  Query: {
    weather: async (_: any, { id }: { id: string }) => {
      const response = await fetch(
        `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${id}`,
      ).then((res) => res.json())

      return {
        lokasi: response.lokasi,
        data: response.data.map((item: any) => ({
          lokasi: item.lokasi,
          cuaca: item.cuaca.flat(),
        })),
        sumber:
          'BMKG (Badan Meteorologi, Klimatologi, dan Geofisika) https://data.bmkg.go.id/prakiraan-cuaca/',
      }
    },
  },
}
