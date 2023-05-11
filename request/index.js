import { getTokenCookie } from "../utils/cookie";

async function processStatus(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.resolve({
    success: false,
    status: response.status,
  });
}

async function resposePackage(jsonRes) {
  if (jsonRes.success) {
    return Promise.resolve(jsonRes.extras);
  }
  return Promise.reject({
    success: false,
    code: jsonRes.error ? jsonRes.error.code : '',
  });
}

// export const serverFetch = async (url, method, query) => {
//   const options = { method, credentials: "same-origin" };
//   const requestUri = query
//     ? `${process.env.API_ENDPOINT}${url}?${query}`
//     : `${process.env.API_ENDPOINT}${url}`;
//   const res = await fetch(requestUri, options);
//   const resjson = await processStatus(res);
//   return resposePackage(resjson);
// };

export const authFetch = async (url, method, query) => {
  const token = getTokenCookie()
  const options = {
    method,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const requestUri = query ? `${url}?${query}` : `${url}`;
  const res = await fetch(requestUri, options);
  const resjson = await processStatus(res);
  return resposePackage(resjson);
};

// export const wrapFetch = async (url, method, query) => {
//   const options = {
//     method,
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const requestUri = query ? `${url}?${query}` : `${url}`;

//   const result = await fetch(requestUri, options);

//   return result.json();
// };

export const noAuthPayloadFetch = async (url, method, query, formData) => {
  const options = {
    method,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const requestUri = query ? `${url}?${query}` : `${url}`;

  const result = await fetch(requestUri, options);
  const json = await result.json()

  return resposePackage(json);
};
