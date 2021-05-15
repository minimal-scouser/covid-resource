import Geocode from "react-geocode";

const HelperFunctions = {
  coordinateToAddress: (lat, lng) => {
      console.log('address')
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        let address = response.results[0].formatted_address;
        return address;
      },
      (error) => {
        console.error(error);
        return ""
      }
    );
  },
};

export { HelperFunctions };
