export async function getMarketData() {
  try {
    const res = await fetch("http://127.0.0.1:8000/market/all");
    return await res.json();
  } catch (err) {
    console.error("API fetch error:", err);
    return [];
  }
}
