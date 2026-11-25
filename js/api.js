const API_URL = "http://127.0.0.1:8000/api/";

async function apiRequest(path, method = "GET", body = null) {
  const headers = { "Content-Type": "application/json" };

  const access = localStorage.getItem("access");
  if (access) {
    headers["Authorization"] = "Bearer " + access;
  }

  const options = { method: method, headers: headers };
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(API_URL + path, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }
  return data;
}
