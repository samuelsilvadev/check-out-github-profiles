import { useLocation } from "react-router-dom";

function LocationDebug() {
  const location = useLocation();

  return <p data-testid="location-debug">{location.pathname}</p>;
}

export default LocationDebug;
