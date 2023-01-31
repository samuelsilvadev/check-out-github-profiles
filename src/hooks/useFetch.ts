import { useCallback, useState } from "react";

type RequestStatus = "idle" | "loading" | "success" | "error";

function useFetch<Data, ServiceArguments extends unknown[]>(
  service: (...args: ServiceArguments) => Promise<Response>
) {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>("idle");

  const handleFetchService = useCallback(
    async (...args: ServiceArguments) => {
      setRequestStatus("loading");

      try {
        const response = await service(...args);

        if (!response.ok) {
          throw response;
        }

        const data = (await response.json()) as Data;

        setData(data);
        setRequestStatus("success");
      } catch {
        setRequestStatus("error");
      }
    },
    [service]
  );

  return {
    data,
    loaded: ["success", "error"].includes(requestStatus),
    loading: requestStatus === "loading",
    error: requestStatus === "error",
    fetch: handleFetchService,
  };
}

export default useFetch;
